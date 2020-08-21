/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core'
import {
  CSSTransition,
} from 'react-transition-group';

const tokenContainerStyles = css({
  border: '1px solid #eee',
  cursor: 'default',
  padding: '4px',
  backgroundColor: '#fefefe',
});

const roundedStyles = css({
  borderRadius: '4px'
});

const removeButtonStyles = css({
  display: 'inline-block',
  appearance: 'none',
  border: 'none',
  opacity: 1
});

const exitStyles = css({
  opacity: 0
});

type TokenProps = {
  text: string;
  appearance?: "rounded" | "default",
  isRemovable?: boolean
}

export default (props: TokenProps) => {
  const {
    appearance = 'default',
    isRemovable = false,
    text = ''
  } = props;

  const [isRemoved, setRemoved] = useState(false);

  return (
    <CSSTransition timeout={500} in={!isRemoved} unmountOnExit>
      {
        (state: string) => (
          <span css={[
            tokenContainerStyles, 
            appearance === 'rounded' ? roundedStyles : null,
            state === 'exited' ? exitStyles : null,
            ]}>
            {text}
            {isRemovable && <button css={removeButtonStyles} onClick={() => setRemoved(true)}>x</button>}
          </span>
        )
      }
    </CSSTransition>
  );
}