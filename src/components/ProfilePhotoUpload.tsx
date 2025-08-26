'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Trash2 } from 'lucide-react';

interface ProfilePhotoUploadProps {
  label?: string;
  className?: string;
}

const STORAGE_KEY = 'youssef_profile_photo_dataurl_v1';

const ProfilePhotoUpload = ({ label = 'Profile Photo', className = '' }: ProfilePhotoUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (saved) setImageDataUrl(saved);
  }, []);

  const handleFile = (file: File) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : null;
      setImageDataUrl(result);
      try {
        localStorage.setItem(STORAGE_KEY, result || '');
      } catch {}
    };
    reader.readAsDataURL(file);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const clearImage = () => {
    setImageDataUrl(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  return (
    <div className={`glass-card rounded-2xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-slate-800">{label}</h4>
        {imageDataUrl && (
          <button
            type="button"
            onClick={clearImage}
            className="inline-flex items-center space-x-2 px-3 py-1.5 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
            <span className="text-sm">Remove</span>
          </button>
        )}
      </div>

      <div
        onDragEnter={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={(e) => { e.preventDefault(); setDragActive(false); }}
        onDrop={onDrop}
        className={`relative rounded-2xl border-2 border-dashed ${dragActive ? 'border-blue-400 bg-blue-50/50' : 'border-slate-300'} p-4 flex flex-col items-center justify-center text-center`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onChange}
          className="hidden"
        />

        {imageDataUrl ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
            <div className="flex flex-col items-center">
              <img
                src={imageDataUrl}
                alt="Profile"
                className="w-40 h-40 rounded-2xl object-cover shadow-lg border border-white/50"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-4 inline-flex items-center space-x-2 px-4 py-2 gradient-bg text-white rounded-xl hover:shadow-lg transition-all"
              >
                <Camera className="h-4 w-4" />
                <span>Change Photo</span>
              </button>
            </div>
          </motion.div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center space-y-3 px-6 py-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center">
              <Camera className="h-7 w-7 text-slate-600" />
            </div>
            <div>
              <p className="text-slate-700 font-medium">Upload a profile photo</p>
              <p className="text-slate-500 text-sm">PNG, JPG up to ~2MB</p>
            </div>
          </button>
        )}

        {!imageDataUrl && (
          <p className="mt-4 text-xs text-slate-500">or drag & drop here</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePhotoUpload; 