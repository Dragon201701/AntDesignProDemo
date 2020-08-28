import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Card, Row, Col, Table, Progress, Statistic} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

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
const videoJsOptions0 = {
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
       src: 'rtmp://218.241.82.19:1935/live/test0',
       type: "rtmp/flv",  // 类型可加可不加，目前未看到影响
      // type: 'video/mp4',
    }
  ]
};
const videoJsOptions1 = {
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
       src: 'rtmp://218.241.82.19:1935/live/test1',
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
      <div>
        <Row gutter={24}>
        <Col span={12} align="middle" justify="center">
          <VideoPlayer {...videoJsOptions0} />
          <VideoPlayer {...videoJsOptions1} />
        </Col>
        <Col span={12} align="middle" justify="center">
          <Card>
            <Table dataSource={testdata} columns={columns} />
          </Card>
          <Card>
            <Row gutter={24}>
              <Col span={8} align="middle" justify="center">
                <Progress
                type="circle"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                percent={60}
                success={{ percent: 30 }}
                />
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="Traffic compare to yesterday"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="Traffic compare to last hour"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
        </Row>
      </div> 
    );
  }
}