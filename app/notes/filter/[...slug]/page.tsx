import NotesClient from '@/app/notes/Notes.client';

type Props = { params: { slug: string[] } };

export default function FilteredNotesPage({ params }: Props) {
  const tagOrAll = params.slug?.[0];
  const tag = tagOrAll && tagOrAll !== 'all' ? tagOrAll : undefined;

  return <NotesClient tag={tag} />;
}
