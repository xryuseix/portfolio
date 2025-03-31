"use client";
import type { Column, Row, Year } from "@/components/data/about";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";
import { Link, LinkIcon } from "@heroui/link";
import { AboutTag } from "@/components/aboutTag";

const YearCol = (year: Year) => {
  if (year.until === "") {
    return <div key={year.since}>{year.since}</div>;
  }
  if (year.until === "-") {
    return <div key={year.since}>{year.since} -</div>;
  }
  return (
    <div key={year.since}>
      {year.since} - {year.until}
    </div>
  );
};

const LinkCol = ({ link }: { link: string }) => {
  if (link === "") {
    return <></>;
  }
  return (
    <Link isExternal color="foreground" href={link}>
      <LinkIcon />
    </Link>
  );
};

const TagsCol = ({ tags }: { tags?: string[] }) => {
  if (typeof tags === "undefined") {
    return <></>;
  }
  return (
    <>
      {tags.map((tag) => (
        <AboutTag key={tag} tag={tag} />
      ))}
    </>
  );
};

export const AboutTable = ({
  columns,
  rows,
}: {
  columns: Column[];
  rows: Row[];
}) => {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => {
          if (column.key === "tags") {
            return (
              <TableColumn key={column.key} className="hidden md:table-cell">
                {column.label}
              </TableColumn>
            );
          }
          return <TableColumn key={column.key}>{column.label}</TableColumn>;
        }}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.title}>
            {(columnKey) => {
              switch (columnKey) {
                case "year":
                  return (
                    <TableCell className="md:whitespace-nowrap">
                      <YearCol {...getKeyValue(item, columnKey)} />
                    </TableCell>
                  );
                case "link":
                  return (
                    <TableCell>
                      <LinkCol link={getKeyValue(item, columnKey)} />
                    </TableCell>
                  );
                case "tags":
                  return (
                    <TableCell className="hidden md:table-cell">
                      <TagsCol tags={getKeyValue(item, columnKey)} />
                    </TableCell>
                  );
                default:
                  return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
              }
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
