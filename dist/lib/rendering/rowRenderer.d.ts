// Type definitions for ag-grid v3.3.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import GridOptionsWrapper from "../gridOptionsWrapper";
import { Grid } from "../grid";
import SelectionRendererFactory from "../selectionRendererFactory";
import GridPanel from "../gridPanel/gridPanel";
import SelectionController from "../selectionController";
import ExpressionService from "../expressionService";
import TemplateService from "../templateService";
import ValueService from "../valueService";
import EventService from "../eventService";
import FloatingRowModel from "../rowControllers/floatingRowModel";
import Column from "../entities/column";
import { RowNode } from "../entities/rowNode";
import { ColDef } from "../entities/colDef";
export default class RowRenderer {
    private columnModel;
    private gridOptionsWrapper;
    private angularGrid;
    private selectionRendererFactory;
    private gridPanel;
    private $compile;
    private $scope;
    private selectionController;
    private expressionService;
    private templateService;
    private cellRendererMap;
    private rowModel;
    private firstVirtualRenderedRow;
    private lastVirtualRenderedRow;
    private focusedCell;
    private valueService;
    private eventService;
    private floatingRowModel;
    private renderedRows;
    private renderedTopFloatingRows;
    private renderedBottomFloatingRows;
    private eAllBodyContainers;
    private eAllPinnedLeftContainers;
    private eAllPinnedRightContainers;
    private eBodyContainer;
    private eBodyViewport;
    private ePinnedLeftColsContainer;
    private ePinnedRightColsContainer;
    private eFloatingTopContainer;
    private eFloatingTopPinnedLeftContainer;
    private eFloatingTopPinnedRightContainer;
    private eFloatingBottomContainer;
    private eFloatingBottomPinnedLeftContainer;
    private eFloatingBottomPinnedRightContainer;
    private eParentsOfRows;
    init(columnModel: any, gridOptionsWrapper: GridOptionsWrapper, gridPanel: GridPanel, angularGrid: Grid, selectionRendererFactory: SelectionRendererFactory, $compile: any, $scope: any, selectionController: SelectionController, expressionService: ExpressionService, templateService: TemplateService, valueService: ValueService, eventService: EventService, floatingRowModel: FloatingRowModel): void;
    setRowModel(rowModel: any): void;
    getAllCellsForColumn(column: Column): HTMLElement[];
    setMainRowWidths(): void;
    private findAllElements(gridPanel);
    refreshAllFloatingRows(): void;
    private refreshFloatingRows(renderedRows, rowNodes, pinnedLeftContainer, pinnedRightContainer, bodyContainer);
    refreshView(refreshFromIndex?: any): void;
    softRefreshView(): void;
    refreshRows(rowNodes: RowNode[]): void;
    refreshCells(rowNodes: RowNode[], colIds: string[]): void;
    rowDataChanged(rows: any): void;
    destroy(): void;
    private refreshAllVirtualRows(fromIndex);
    refreshGroupRows(): void;
    private removeVirtualRow(rowsToRemove, fromIndex?);
    private unbindVirtualRow(indexToRemove);
    drawVirtualRows(): void;
    workOutFirstAndLastRowsToRender(): void;
    getFirstVirtualRenderedRow(): number;
    getLastVirtualRenderedRow(): number;
    private ensureRowsRendered();
    private insertRow(node, rowIndex, mainRowWidth);
    getRenderedNodes(): any[];
    getIndexOfRenderedNode(node: any): number;
    navigateToNextCell(key: any, rowIndex: number, column: Column): void;
    private getNextCellToFocus(key, lastCellToFocus);
    onRowSelected(rowIndex: number, selected: boolean): void;
    focusCell(eCell: any, rowIndex: number, colId: string, colDef: ColDef, forceBrowserFocus: any): void;
    getFocusedCell(): {
        rowIndex: number;
        colId: string;
        node: RowNode;
        colDef: ColDef;
    };
    setFocusedCell(rowIndex: any, colIndex: any): void;
    startEditingNextCell(rowIndex: any, column: any, shiftKey: any): void;
}
