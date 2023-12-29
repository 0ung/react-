import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Notifications: [],
    };
  }

  componentDidMount() {
    //컴포넌트가 마운트 된 직후에 실행할 내용
    const { Notifications } = this.state;
    //중괄호를 이유는 키값을 가져온다. 즉 this.state의 값이 순차적으로 notifications
    ///
    timer = setInterval(() => {
      if (Notifications.length < reservedNotifications.length) {
        const index = Notifications.length;
        Notifications.push(reservedNotifications[index]);
        this.setState({
          Notifications: Notifications,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    //즉 timer가 제거되지않았다면 제거, 예외처리
    if (timer) {
      //turhy
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div>
        {this.state.Notifications.map((notifications) => {
          return (
            <Notification
              key={notifications.id}
              id={notifications.id}
              message={notifications.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
