import * as React from "react";
import { TreeSelect } from "antd";
const { SHOW_PARENT } = TreeSelect;

interface FilterProps {
  data: Array<string>;
  filter: Object;
  setFilter: React.Dispatch<Object>;
  placeholder: string;
  keyState: string;
}

function FilterInput(props: FilterProps): React.ReactElement {
  const { data, filter, setFilter, keyState, placeholder } = props;
  const [treeData, setTreeData] = React.useState<Array<Object>>([]);
  const [value, setValue] = React.useState<Array<string>>([]);
  const onChange = (value): void => {
    setValue(value);
    setFilter({ ...filter, [keyState]: value });
  };

  React.useEffect(() => {
    if (data) {
      const newData = data.map((v, index) => {
        return {
          title: v,
          value: v,
          key: `${index}-${v}`
        };
      });
      setTreeData(newData);
    }
  }, [data]);

  const tProps: Object = {
    treeData,
    value: value,
    onChange: onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    searchPlaceholder: placeholder,
    style: {
      minWidth: 190,
      width: "40vw",
      maxWidth: "50vw"
    }
  };
  return <TreeSelect {...tProps} />;
}

export default FilterInput;
