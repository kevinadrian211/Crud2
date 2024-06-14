import { DateField, DeleteButton, EditButton, List, useTable } from "@refinedev/antd";
import { useMany, BaseRecord, GetManyResponse, HttpError, BaseKey } from "@refinedev/core";
import { Space, Table } from "antd";

export const FilmList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  // Filtrar y mapear los ids de los registros en dataSource
  const ids = tableProps?.dataSource
    ?.map((item) => item?.id)
    .filter((id): id is BaseKey => id !== undefined) ?? [];

  const { data: filmData, isLoading: filmIsLoading } = useMany<GetManyResponse<BaseRecord>, HttpError>({
    resource: "films",
    ids: ids,
    queryOptions: {
      enabled: !!tableProps?.dataSource,
      // Otras opciones de queryOptions según sea necesario
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="title" title={"Title"} />
        <Table.Column dataIndex="director" title={"Director"} />
        <Table.Column dataIndex="synopsis" title={"Synopsis"} />
        <Table.Column dataIndex="duration" title={"Duration"} />
        <Table.Column
          dataIndex="createdAt"
          title={"Created at"}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};