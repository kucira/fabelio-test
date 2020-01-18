import * as React from "react";
import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

interface PropTypes {
  data: Object;
}

function Item(props: PropTypes): React.ReactElement {
  const { data } = props;
  return (
    <Card
      extra={new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data?.price)} 
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://www.bebitalia.com/sites/default/files/styles/gallery_product/public/products/gallery/59--06-BEB_ITALIA-BEND-SOFA-06-BEND-SOFA.jpg?itok=sdI-zXqY"
        />
      }
      actions={[
        <a href="" >{data?.furniture_style.join(", ")}</a>,
        <span>
          <Icon type="dingding" key="edit" />
          {data?.delivery_time} Hari
        </span>
      ]}
    >
      <Meta
        title={data?.name}
        description={data?.description}
      />
    </Card>
  );
}

export default Item;
