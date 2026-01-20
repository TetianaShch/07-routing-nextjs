import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function FilteredNotesPage({ params }: Props) {
  const { slug } = await params;

  const key = slug?.[0] ?? 'all';

  return <NotesClient key={key} slug={slug} />;
}
