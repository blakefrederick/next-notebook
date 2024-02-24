'use client'

import Image from 'next/image'
import { StreamText } from '@nteract/outputs'
import {
  Cells,
  Cell,
  Input,
  Outputs,
  Prompt,
} from '@nteract/presentational-components'

const NotebookViewer = ({ notebook }) => {
  const renderOutput = (output, i) => {
    // Determine the type of output - docs are here: https://github.com/nteract/outputs/blob/master/docs/overview.md
    switch (output.output_type) {
      case 'stream':
        return <StreamText key={i} {...output} />
      case 'display_data':
        const imageData = output.data['image/png']
        if (imageData) {
          const src = `data:image/png;base64,${imageData}`
          return (
            <Image
              key={i}
              src={src}
              width={output.metadata.width || 555}
              height={output.metadata.height || 555}
              alt="Graph showing a smooth, regular wave oscillating symmetrically around a central line over time. The title of the graph is 'Love to graph'."
            />
          )
        }
        break
      default:
        return <></>
    }
  }

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
            {cell.cell_type === 'code' && (
              <Outputs>{cell.outputs.map(renderOutput)}</Outputs>
            )}
          </Cell>
        ))}
      </Cells>
    </div>
  )
}

export default NotebookViewer
