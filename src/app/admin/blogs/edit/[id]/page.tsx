'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogEditorForm from '@/components/Admin/BlogEditorForm';
import { BlogPost } from '@/lib/blogs';

export default function EditBlogPage() {
  const params = useParams();
  const id = params?.id as string;

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const data = await res.json();
        if (data.success) {
          setBlog(data.blog);
        } else {
          setError(data.error || 'Failed to load blog');
        }
      } catch (err) {
        setError('Failed to fetch blog post');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="p-12 text-center text-slate-400 text-sm font-semibold">Loading blog details...</div>;
  }

  if (error || !blog) {
    return (
      <div className="p-12 text-center text-rose-500 font-semibold space-y-2">
        <p>{error || 'Blog post not found'}</p>
      </div>
    );
  }

  return <BlogEditorForm initialData={blog} isEditing={true} />;
}
