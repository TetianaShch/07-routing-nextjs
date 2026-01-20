import NotesClient from './Notes.client';

type Props = {
  params: {
    slug?: string[];
  };
};

export default function FilteredNotesPage({ params }: Props) {
  return <NotesClient slug={params.slug} />;
}
