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

export default function TableTeams() {
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
          <TableColumn style={{backgroundColor: '#FAF6F5'}}>NAME</TableColumn>
          <TableColumn style={{backgroundColor: '#FAF6F5'}}>ROLE</TableColumn>
          <TableColumn style={{backgroundColor: '#FAF6F5'}}>STATUS</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}