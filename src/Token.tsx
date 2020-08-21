/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core'
import {
  CSSTransition,
} from 'react-transition-group';

import close from './close.svg'

const tokenContainerStyles = css({
  textTransform: 'uppercase',
  border: '1px solid #eee',
  cursor: 'default',
  margin: '0 2px',
  backgroundColor: '#fefefe',
  lineHeight: 1,
  display: 'inline-flex',
  alignContent: 'center',
  justifyContent: 'center',
  transition: `opacity 100ms, transform 100ms`
});

const roundedStyles = css({
  borderRadius: '4px'
});

const removeButtonStyles = css({
  display: 'inline-grid',
  appearance: 'none',
  border: 'none',
  opacity: 1,
  lineHeight: 1,
  height: '1rem',
  width: '1rem',
  padding: '.2rem',
  margin: 0,
});

const exitingStyles = css({
  opacity: 0,
  transform: 'translateX(-50%)',
})

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
    <CSSTransition timeout={100} in={!isRemoved} unmountOnExit>
      {
        (state: string) => (
          <span css={[
            tokenContainerStyles,
            appearance === 'rounded' ? roundedStyles : null,
            state === 'exiting' ? exitingStyles : null,
          ]}>
            <span>{text}</span>
            {isRemovable &&
              <button css={removeButtonStyles} onClick={() => setRemoved(true)}>
                <img src={close} alt="close" />
              </button>
            }
          </span>
        )
      }
    </CSSTransition>
  );
}