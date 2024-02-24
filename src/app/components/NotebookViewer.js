'use client'

import { DisplayData, ExecuteResult } from '@nteract/outputs'
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
            <Outputs>
              {cell.outputs &&
                cell.outputs.map((output, outputIndex) => {
                  // Determine the type of output - docs are here: https://github.com/nteract/outputs/blob/master/docs/overview.md
                  switch (output.output_type) {
                    case 'display_data':
                      return <DisplayData key={outputIndex} {...output} />
                    case 'execute_result':
                      return <ExecuteResult key={outputIndex} {...output} />
                    default:
                      return <></>
                  }
                })}
            </Outputs>
          </Cell>
        ))}
      </Cells>
    </div>
  )
}

export default NotebookViewer
