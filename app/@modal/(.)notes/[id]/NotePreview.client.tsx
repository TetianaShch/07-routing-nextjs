'use client';

import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import ModalRoute from '@/components/Modal/ModalRoute';
import { fetchNoteById } from '@/lib/api';

type Props = { id: string };

export default function NotePreviewClient({ id }: Props) {
  const router = useRouter();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  return (
    <ModalRoute>
      <button type="button" onClick={() => router.back()}>
        Close
      </button>

      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </ModalRoute>
  );
}
