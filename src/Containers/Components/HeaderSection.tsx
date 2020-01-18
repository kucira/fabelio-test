import * as React from "react";
import HeaderCustom from "../../Components/Header";
import FilterInput from "../../Components/FilterInput";
import { Row, Col, Input } from "antd";
const { Search } = Input;

interface PropsType {
  furnitures: Array<string>;
  setFilter: React.Dispatch<Object>;
  filter: Object;
  originalProducts: Array<Object>;
}

const deliveryTimes: Array<string> = ["1 week", "2 week", "1 month", "more"];

function HeaderSection(props: PropsType): React.ReactElement {
  const { furnitures, setFilter, filter } = props;

  const onChange = (value): void => {
    setFilter({ ...filter, keyword: value });
  };

  return (
    <HeaderCustom>
      <Row>
        <Col>
          <Search onSearch={onChange} />
        </Col>
      </Row>
      <Row type="flex" gutter={12} justify="space-between">
        <Col>
          <FilterInput
            placeholder="Furniture Style"
            data={furnitures}
            filter={filter}
            setFilter={setFilter}
            keyState="styles"
          />
        </Col>
        <Col>
          <FilterInput
            placeholder="Delivery Time"
            data={deliveryTimes}
            filter={filter}
            setFilter={setFilter}
            keyState="deliveryTime"
          />
        </Col>
      </Row>
    </HeaderCustom>
  );
}

export default HeaderSection;
