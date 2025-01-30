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

export default function TableTeam() {
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
          <TableColumn className="table-column-item" style={{backgroundColor: '#FAF6F5'}}>Equipo</TableColumn>
          <TableColumn className="table-column-item" style={{backgroundColor: '#FAF6F5'}}>Miembros</TableColumn>
          <TableColumn className="table-column-item" style={{backgroundColor: '#FAF6F5'}}>Fecha inicio</TableColumn>
          <TableColumn className="table-column-item" style={{backgroundColor: '#FAF6F5'}}>Fecha Limite</TableColumn>
          <TableColumn className="table-column-item" style={{backgroundColor: '#FAF6F5'}}>Lider</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Dolphin Devs</TableCell>
            <TableCell>4...</TableCell>
            <TableCell>Enero 1, 2025</TableCell>
            <TableCell>Enero 31, 2025</TableCell>
            <TableCell>Bryan Chuc</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}