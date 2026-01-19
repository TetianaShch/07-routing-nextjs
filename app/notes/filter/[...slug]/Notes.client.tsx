'use client';

type Props = { slug?: string[] };

export default function NotesClient({ slug }: Props) {
  return (
    <div>
      <h2>Filtered notes</h2>
      <p>{slug?.join('/') ?? 'no filters'}</p>
    </div>
  );
}
