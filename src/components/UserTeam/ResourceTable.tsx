import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
} from "@heroui/react";

export default function ResourceTable() {
  const [selectedColor, setSelectedColor] = React.useState("danger");

  const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

  return (
    <div className="flex flex-col gap-3">
      <Table
        aria-label="Example static collection table"
        defaultSelectedKeys={["2"]}
        // selectionMode="single"
      >

        <TableHeader   >
          <TableColumn className="table-column-item" style={{backgroundColor: '#FAF6F5'}}>Nombre</TableColumn>
          <TableColumn className="table-column-item" style={{backgroundColor: '#FAF6F5'}}>Cantidad</TableColumn>
          <TableColumn className="table-column-item" style={{backgroundColor: '#FAF6F5'}}>Nombre</TableColumn>
          <TableColumn className="table-column-item" style={{backgroundColor: '#FAF6F5'}}>Cantidad</TableColumn>
          <TableColumn className="table-column-item" style={{backgroundColor: '#FAF6F5'}}>Nombre</TableColumn>
          <TableColumn className="table-column-item" style={{backgroundColor: '#FAF6F5'}}>Cantidad</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>ASUS X515</TableCell>
            <TableCell>4</TableCell>
            <TableCell>Mouse Machenike</TableCell>
            <TableCell>4</TableCell>
            <TableCell>Impresora HP</TableCell>
            <TableCell>4</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}