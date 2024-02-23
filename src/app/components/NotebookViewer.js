'use client'

import React from 'react'
import { Display } from '@nteract/outputs'
import {
  Cells,
  Cell,
  Input,
  Outputs,
  Prompt,
} from '@nteract/presentational-components'

const NotebookViewer = ({ notebook }) => {
  return (
    <div>
      <Cells>
        {notebook.cells.map((cell, index) => (
          <Cell key={index}>
            <Input>
              <Prompt counter={cell.execution_count || null} />
              <pre>
                {Array.isArray(cell.source)
                  ? cell.source.join('')
                  : cell.source}
              </pre>
            </Input>
            {/* <Outputs>
              {cell.outputs &&
                cell.outputs.map((output, outputIndex) => (
                  <Display key={outputIndex} output={output} />
                ))}
            </Outputs> */}
          </Cell>
        ))}
      </Cells>
    </div>
  )
}

export default NotebookViewer
