import { Table } from "antd";
import dayjs from "dayjs";
import React from "react";
import { User } from "./search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: string;
  organization: string;
  created: number;
}
interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </>
            );
          },
        },
        {
          title: "创建时间",
          render(value, project) {
            return (
              <>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : "无"}
              </>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
};
