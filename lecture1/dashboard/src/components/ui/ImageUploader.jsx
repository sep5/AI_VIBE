/**
 * ImageUploader 컴포넌트
 *
 * Props:
 * @param {function} onUploadSuccess - 업로드 완료 후 호출되는 콜백 [Required]
 *
 * Example usage:
 * <ImageUploader onUploadSuccess={fetchImages} />
 */
import { useState, useRef } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  LinearProgress,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { supabase } from '../../lib/supabase';

function ImageUploader({ onUploadSuccess }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const inputRef = useRef(null);

  const uploadFile = async (file) => {
    if (!file.type.startsWith('image/')) return { error: '이미지 파일만 업로드 가능합니다.' };

    const fileName = `${Date.now()}_${file.name}`;
    const { error } = await supabase.storage
      .from('images')
      .upload(fileName, file, { upsert: false });

    return { error, fileName };
  };

  const handleFiles = async (files) => {
    const fileList = Array.from(files);
    if (!fileList.length) return;

    setIsUploading(true);
    setUploadProgress(0);

    for (let i = 0; i < fileList.length; i++) {
      await uploadFile(fileList[i]);
      setUploadProgress(Math.round(((i + 1) / fileList.length) * 100));
    }

    setIsUploading(false);
    setUploadProgress(0);
    onUploadSuccess();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  return (
    <Box
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => !isUploading && inputRef.current?.click()}
      sx={{
        border: '2px dashed',
        borderColor: isDragging ? 'primary.main' : 'grey.400',
        borderRadius: 3,
        p: { xs: 4, md: 6 },
        textAlign: 'center',
        cursor: isUploading ? 'default' : 'pointer',
        bgcolor: isDragging ? 'primary.50' : 'grey.50',
        transition: 'all 0.2s',
        '&:hover': {
          borderColor: isUploading ? 'grey.400' : 'primary.main',
          bgcolor: isUploading ? 'grey.50' : 'primary.50',
        },
      }}
    >
      <input
        ref={inputRef}
        type='file'
        multiple
        accept='image/*'
        hidden
        onChange={(e) => handleFiles(e.target.files)}
      />
      {isUploading ? (
        <Box>
          <CircularProgress size={40} sx={{ mb: 2 }} />
          <Typography variant='body2' color='text.secondary'>
            업로드 중... {uploadProgress}%
          </Typography>
          <LinearProgress
            variant='determinate'
            value={uploadProgress}
            sx={{ mt: 1, borderRadius: 1 }}
          />
        </Box>
      ) : (
        <Box>
          <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
          <Typography variant='h6' gutterBottom>
            이미지를 드래그하거나 클릭하여 업로드
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            JPG, PNG, GIF, WebP 지원 · 파일당 최대 50MB
          </Typography>
          <Button variant='contained' sx={{ mt: 2 }} startIcon={<CloudUploadIcon />}>
            파일 선택
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default ImageUploader;
