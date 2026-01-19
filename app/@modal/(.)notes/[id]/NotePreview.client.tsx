'use client';

type Props = { id: string };

export default function NotePreviewClient({ id }: Props) {
  return (
    <div style={{ padding: 16 }}>
      <h3>Note preview</h3>
      <p>id: {id}</p>
    </div>
  );
}
