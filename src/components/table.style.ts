export const TABLE_STYLE = `
/* bootstrap override: */

:host /deep/ .data-table.table > tbody+tbody {
    border-top: none;
}
:host /deep/ .data-table.table td {
    vertical-align: middle;
}

:host /deep/ .data-table > thead > tr > th,
:host /deep/ .data-table > tbody > tr > td {
	overflow: hidden;
}

/* I can't use the bootstrap striped table, because of the expandable rows */
:host /deep/ .row-odd {
    background-color: #fafafa;
}
:host /deep/ .row-even {
    background-color: #eeeeee;
}

.data-table .substitute-rows > tr:hover,
:host /deep/ .data-table .data-table-row:hover {
    background-color: #e0e0e0;
}
/* table itself: */

.data-table {
    box-shadow: 0 0 15px rgb(236, 236, 236);
    table-layout: fixed;
}

/* header cells: */

.column-header {
    position: relative;
}
.expand-column-header {
	width: 50px;
}
.select-column-header {
	width: 50px;
	text-align: center;
}
.index-column-header {
	width: 40px;
}
.column-header.sortable {
    cursor: pointer;
}
.column-header .column-sort-icon {
	float: right;
}
.column-header.resizable .column-sort-icon {
    margin-right: 8px;
}
.column-header .column-sort-icon .column-sortable-icon {
    color: lightgray;
}
.column-header .column-resize-handle {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    width: 8px;
    height: 100%;
    cursor: col-resize;
}

/* cover: */
.data-table-box {
	position: relative;
}

.busy {
	position: absolute;
	z-index: 1;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.25);
}

.busy > i {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

//scrolling and fixed header
.dtb-v-scroll {
    overflow-y: scroll;
}

.dtb-h-scroll {
    overflow-x: scroll;
}

.data-table-box {
    position: relative;
}

.loading-cover {
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: rgba(255, 255, 255, 0.3);
   top: 0;
}

.fixed-header{
    /* margin-bottom: -33px; */
    /* width: 985px; */
}

.header-box{
    background: #ffffff;
    z-index: 1;
}
`;