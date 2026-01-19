import { fetchNoteById } from '@/lib/api';
import { notFound } from 'next/navigation';
import ModalRoute from '@/components/Modal/ModalRoute';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NotePreview({ params }: Props) {
  const { id } = await params;

  const note = await fetchNoteById(id).catch(() => null);
  if (!note) notFound();

  return (
    <ModalRoute>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </ModalRoute>
  );
}
