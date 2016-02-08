// Type definitions for ag-grid v3.3.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import Column from "./entities/column";
import { RowNode } from "./entities/rowNode";
import { ColDef } from "./entities/colDef";
export declare class Grid {
    static VIRTUAL_ROW_REMOVED: string;
    static VIRTUAL_ROW_SELECTED: string;
    private virtualRowListeners;
    private gridOptions;
    private gridOptionsWrapper;
    private inMemoryRowController;
    private doingVirtualPaging;
    private paginationController;
    private virtualPageRowController;
    private floatingRowModel;
    private finished;
    private selectionController;
    private columnController;
    private rowRenderer;
    private headerRenderer;
    private filterManager;
    private valueService;
    private masterSlaveService;
    private eventService;
    private dragAndDropService;
    private toolPanel;
    private gridPanel;
    private eRootPanel;
    private toolPanelShowing;
    private doingPagination;
    private usingInMemoryModel;
    private rowModel;
    private windowResizeListener;
    private eUserProvidedDiv;
    private logger;
    constructor(eGridDiv: any, gridOptions: any, globalEventListener?: Function, $scope?: any, $compile?: any, quickFilterOnScope?: any);
    private decideStartingOverlay();
    private addWindowResizeListener();
    getRowModel(): any;
    private periodicallyDoLayout();
    private setupComponents($scope, $compile, eUserProvidedDiv, globalEventListener);
    private onColumnChanged(event);
    refreshRowGroup(): void;
    private onIndividualColumnResized(column);
    showToolPanel(show: any): void;
    isToolPanelShowing(): boolean;
    isUsingInMemoryModel(): boolean;
    setDatasource(datasource?: any): void;
    private refreshHeaderAndBody();
    private refreshHeader();
    private refreshBody();
    destroy(): void;
    onQuickFilterChanged(newFilter: any): void;
    onFilterModified(): void;
    onFilterChanged(): void;
    onRowClicked(multiSelectKeyPressed: boolean, rowIndex: number, node: RowNode): void;
    showLoadingOverlay(): void;
    showNoRowsOverlay(): void;
    hideOverlay(): void;
    private setupColumns();
    updateModelAndRefresh(step: any, refreshFromIndex?: any): void;
    setRowData(rows?: any, firstId?: any): void;
    ensureNodeVisible(comparator: any): void;
    getFilterModel(): any;
    setFocusedCell(rowIndex: number, colKey: string | ColDef | Column): void;
    getSortModel(): {
        colId: string;
        sort: string;
    }[];
    setSortModel(sortModel: any): void;
    onSortingChanged(): void;
    addVirtualRowListener(eventName: string, rowIndex: number, callback: Function): void;
    onVirtualRowSelected(rowIndex: number, selected: boolean): void;
    onVirtualRowRemoved(rowIndex: number): void;
    private removeVirtualCallbacksForRow(rowIndex);
    setColumnDefs(colDefs?: ColDef[]): void;
    updateBodyContainerWidthAfterColResize(): void;
    updatePinnedColContainerWidthAfterColResize(): void;
    doLayout(): void;
}
