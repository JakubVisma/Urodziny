import styled from "styled-components";

import { SudokuStateManager } from "../../hooks/useSudokuStateManager.tsx";
import { boardLinesColor } from "../../utils/styles.ts";

import Cell from "./Cell.tsx";
import React from "react";

const Wrapper = styled.div`
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  border: 1px solid ${boardLinesColor};
  border-radius: 0.365rem;
  overflow: hidden;
  aspect-ratio: 1;
`;

interface BoardProps {
  sudokuStateManager: SudokuStateManager;
}

const Board = ({ sudokuStateManager }: BoardProps) => {
  const { state, selectedCell } = sudokuStateManager;

  return (
    <Wrapper>
      {state.map((row, rowIndex) =>
        row.map((input, columnIndex) => (
          <Cell
            key={`${rowIndex}-${columnIndex}`}
            column={columnIndex}
            row={rowIndex}
            sudokuStateManager={sudokuStateManager}
            value={input.value}
            isSelected={Boolean(
              selectedCell &&
                selectedCell.row === rowIndex &&
                selectedCell.column === columnIndex
            )}
          />
        ))
      )}
    </Wrapper>
  );
};

export default Board;
