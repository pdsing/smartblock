import * as React from 'react'
import { setBlockType } from 'prosemirror-commands'
import uuid from 'uuid'
import HeadingIcon from '../components/icons/Heading2'
import AlignLeftIcon from '../components/icons/AlignLeft'
import AlignCenterIcon from '../components/icons/AlignCenter'
import AlignRightIcon from '../components/icons/AlignRight'
import { Extension, ExtensionSchema } from '../types'
import { blockActive, getParentNodeFromState } from '../utils'
import Button from '../components/button'

export default class Heading3 extends Extension {
  constructor(schema?: ExtensionSchema) {
    super();
    this.customSchema = schema;
  }
  get name() {
    return 'heading3'
  }

  get group() {
    return 'block'
  }

  get showMenu() {
    return true
  }

  get schema() {
    if (this.customSchema) {
      return this.customSchema;
    }
    return {
      content: 'inline*',
      group: 'block',
      defining: true,
      attrs: {
        align: { default: 'left' },
        id: { default: '' }
      },
      parseDOM: [
        {
          tag: 'h3',
          getAttrs(dom) {
            return {
              id: dom.getAttribute('id') || uuid()
            }
          }
        }
      ],
      toDOM(node) {
        return [
          'h3',
          {
            style: `text-align: ${node.attrs.align}`,
            id: node.attrs.id || uuid()
          },
          0
        ]
      }
    }
  }

  get icon() {
    return <HeadingIcon style={{ width: '24px', height: '24px' }} />
  }

  active(state) {
    return blockActive(state.schema.nodes.heading3)(state)
  }

  enable(state) {
    return setBlockType(state.schema.nodes.heading3)(state)
  }

  customMenu({ state, dispatch }) {
    const node = getParentNodeFromState(state);
    return (
      <>
        <Button
          type="button"
          active={node && node.attrs.align === 'left'}
          onClick={() => {
            setBlockType(state.schema.nodes.heading3, {
              align: 'left'
            })(state, dispatch)
          }}
        >
          <AlignLeftIcon style={{ width: '24px', height: '24px' }} />
        </Button>
        <Button
          type="button"
          active={node && node.attrs.align === 'center'}
          onClick={() => {
            setBlockType(state.schema.nodes.heading3, {
              align: 'center'
            })(state, dispatch)
          }}
        >
          <AlignCenterIcon style={{ width: '24px', height: '24px' }} />
        </Button>
        <Button
          type="button"
          active={node && node.attrs.align === 'right'}
          onClick={() => {
            setBlockType(state.schema.nodes.heading3, {
              align: 'right'
            })(state, dispatch)
          }}
        >
          <AlignRightIcon style={{ width: '24px', height: '24px' }} />
        </Button>
      </>
    )
  }

  onClick(state, dispatch) {
    setBlockType(state.schema.nodes.heading3)(state, dispatch)
  }
}
