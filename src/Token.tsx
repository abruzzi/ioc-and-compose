import React from 'react';

type TokenProps = {
  text: string;
  appearance?: "rounded" | "default"
}

export default (props: TokenProps) => {
  return (<span>{props.text}</span>)
}