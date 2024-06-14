import { DateField, Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const FilmShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const film = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "categories",
    id: film?.category?.id || "",
    queryOptions: {
      enabled: !!film,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={film?.id} />
      <Title level={5}>{"Title"}</Title>
      <TextField value={film?.title} />
      <Title level={5}>{"Director"}</Title>
      <TextField value={film?.director} />
      <Title level={5}>{"Synopsis"}</Title>
      <TextField value={film?.synopsis} />
      <Title level={5}>{"Duration (minutes)"}</Title>
      <TextField value={film?.duration} />
    </Show>
  );
};