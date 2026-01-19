import { fetchNoteById } from '@/lib/api';
import { notFound } from 'next/navigation';
import ModalRoute from '@/components/Modal/ModalRoute';

type Props = {
  params: { id: string } | Promise<{ id: string }>;
};

export default async function NotePreview({ params }: Props) {
  const { id } = await params;

  let note;
  try {
    note = await fetchNoteById(id);
  } catch (e) {
    notFound();
  }

  if (!note) notFound();

  return (
    <ModalRoute>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </ModalRoute>
  );
}
