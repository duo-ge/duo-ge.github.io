var posts=["2020/09/09/使用记录/Canal/","2020/09/09/使用记录/ElasticSearch/","2021/01/01/使用记录/Jenkins/","2018/11/01/使用记录/Linux和Docker/","2020/01/01/使用记录/MongoDB/","2020/09/09/使用记录/Nginx/","2021/01/01/使用记录/Mysql主从复制搭建/","2020/01/01/使用记录/Redis/","2020/01/01/使用记录/RabbitMQ/","2021/01/01/使用记录/seata/","2021/01/01/使用记录/测试环境搭建流程/","2020/03/05/收藏摘录/我从未见过懒惰的人/","2021/01/01/学习笔记/Mysql常用运维统计语句/","2021/01/01/学习笔记/git基础命令图示/","2021/01/01/学习笔记/年度计划/","2017/03/04/心情随记/随记2017年3月14日/","2021/01/01/学习笔记/老程序员给初学者的一些建议和忠告/","2019/02/01/心情随记/随记2019年2月某日/","2020/11/19/心情随记/随记2020年11月19日/","2020/07/15/心情随记/随记2020年7月15日/","2024/05/09/心情随记/随记2024年5月9日/","2022/01/01/心情随记/随记2022年某月/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };