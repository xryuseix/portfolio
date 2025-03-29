"use client";
import { Chip } from "@heroui/react";
import { techColumns, techRows } from "@/components/data/techs";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";

export const Technologies = () => {
  return (
    <div>
      <div className="text-2xl">💻 Technologies</div>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={techColumns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={techRows}>
          {(item) => (
            <TableRow key={item.genre}>
              {(columnKey) =>
                columnKey === "genre" ? (
                  <TableCell>
                    <div className="text-base font-bold">
                      {getKeyValue(item, columnKey)}
                    </div>
                  </TableCell>
                ) : (
                  <TableCell>
                    {getKeyValue(item, columnKey).map((tech: string) => (
                      <Chip
                        key={tech}
                        variant="faded"
                        radius="sm"
                        className="mx-px"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </TableCell>
                )
              }
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
