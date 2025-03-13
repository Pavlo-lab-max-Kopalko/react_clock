import React from 'react';

interface Props {
  name: string;
}

export function Clock({ name }: Props) {
  return <strong className="Clock__name">{name}</strong>;
}
