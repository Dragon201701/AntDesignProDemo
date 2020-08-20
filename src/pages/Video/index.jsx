import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Card, Row, Col, Table} from 'antd';
import styles from './index.less';
import VideoPlayer from './VideoPlayer';
import testdata from './testdata.js'
var videoSource = 'rtmp://localhost/live/test0';
const columns = [
  {
    title: 'Object',
    dataIndex: 'object', 
    key: 'object',
  },
  {
    title: 'Numbers',
    dataIndex: 'amount',
    key: 'amount',
  },
];
const videoJsOptions = {
  autoplay: true,  // 自动播放
  language: 'zh-CN', 
  controls: true,  // 控制条
  preload: 'auto',  // 自动加载
  errorDisplay: true,  // 错误展示
  width: 500,  // 宽
  height: 300,  // 高
  userActions: {
    hotkeys: true  // 是否支持热键
  },
  sources: [
    {
       // src: 'rtmp://localhost/live/STREAM_NAME',
       src: 'rtmp://localhost/live/test0',
       type: "rtmp/flv",  // 类型可加可不加，目前未看到影响
      // type: 'video/mp4',
    }
  ]
};
/*export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
   
  );
};
*/
export default class Video extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      source: videoSource, 
      dataSource: testdata,
    }
  }
  componentDidMount() {
    
  }
  componentWillUnmount(){
    //clearInterval(this.timerID);
  }
  componentDidUpdate(prevProps, prevState) {
    
  }
  
  render(){
    /*<PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <div
        style={{
          paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large" />
      </div>
    </PageHeaderWrapper>*/
    return (
      <Card>
        <Row gutter={24}>
        <Col span={12} align="middle" justify="center">
          <VideoPlayer {...videoJsOptions} />
        </Col>
        <Col span={12} align="middle" justify="center">
          <Table dataSource={testdata} columns={columns} />
        </Col>
        </Row>
      </Card> 
    );
  }
}