import * as React from "react";
import HeaderSection from "./Components/HeaderSection";
import Item from "./Components/Item";
import { Layout } from "antd";
import { getDataFurniture } from "../API";
import { Row, Col } from "antd";

const { Content } = Layout;
interface JsonTypes {
  name: string;
  furniture_style: Array<string>;
  delivery_time: string;
}

function HomePage(): React.ReactElement {
  const [data, setData] = React.useState<any | null>(null);
  const [originalProducts, setOriginalProducts] = React.useState<Array<Object>>(
    []
  );
  const [filter, setFilter] = React.useState<Object>({
    keyword: "",
    styles: [],
    deliveryTime: [],
  });
  const [products, setProducts] = React.useState<Array<Object>>([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await getDataFurniture();
      setData(response);
      setProducts(response.products);
      setOriginalProducts(response.products);
    };
    getData();
  }, []);

  React.useEffect(() => {
      const doFilter = () => {
        const keywordConditional = (v:JsonTypes, keyword:string):boolean => { 
          return v.name.toLowerCase().includes(keyword.toLowerCase());
        };
        const styleConditional = (v:JsonTypes, style:Array<string>):boolean => {
          return v.furniture_style.filter(f => {
            return style.indexOf(f) > -1;
          }).length === style.length;
        };
        const deliveryConditional = (v:JsonTypes, delivery:Array<string>):boolean => {
          let time:Array<number> = [];
          delivery.forEach(d => {
            switch(d) {
              case '1 week':
                time = time.concat([1,2,3,4,5,6,7]);
              break;
              case '2 week' :
                time = time.concat([8,9,10,11,12,13,14]);
              break;
              case '1 month' :
                  time = time.concat([15,16,17,18,19,20,21,22,23,24,25,26,27,28]);
              break;
              case 'more' :
                  time = time.concat([29,30]);
              break;
            }    
            return time;
          });
          if(parseInt(v.delivery_time, 10) > 28){
            return (parseInt(v.delivery_time, 10) > 28);
          }
          else {
            return time.length > 0 ? time.indexOf(parseInt(v.delivery_time, 10)) > -1 : true;
          }
        };
        const searchProduct = originalProducts.filter(v => {
          return keywordConditional(v, filter?.keyword) && styleConditional(v, filter?.styles) && deliveryConditional(v, filter?.deliveryTime);
        });
        setProducts(searchProduct);
      };
      
      doFilter();
  }, [filter, originalProducts]);

  const renderProducts = () => {
    if (products) {
      return products.map((v, index) => (
        <Col>
          <Item key={index} data={v} />
        </Col>
      ));
    }
  };

  return (
    <React.Fragment>
      <HeaderSection
        furnitures={data?.furniture_styles}
        filter={filter}
        setFilter={setFilter}
        originalProducts={originalProducts}
      />
      <Content
        style={{
          background: "#fff",
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <Row type="flex" justify="space-around">
          {renderProducts()}
        </Row>
      </Content>
    </React.Fragment>
  );
}

export default HomePage;
