-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 05 月 20 日 12:42
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `bjtu`
--

-- --------------------------------------------------------

--
-- 表的结构 `answer`
--

CREATE TABLE IF NOT EXISTS `answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL,
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `likeNumber` int(11) DEFAULT '0',
  `commentNumber` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `answer`
--

INSERT INTO `answer` (`id`, `content`, `createtime`, `likeNumber`, `commentNumber`) VALUES
(1, '交大逸夫楼三楼的咖啡厅不错，适合上自习', '2017-05-09 07:30:31', 1, 3),
(2, '学活三楼比较安静，适合上自习', '2017-05-09 07:30:31', 2, 4),
(3, '机械楼空教室比较多，也很安静', '2017-05-09 07:30:31', 3, 2),
(4, '交大南门有一家绝味烤串不错', '2017-05-09 07:30:31', 5, 1),
(5, '交大东路有一家姥姥家春饼很好吃', '2017-05-09 07:30:31', 10, 3),
(6, '这个问题当然是仁者见仁，智者见智，主要还是看你的基础，如果基础很好的交大的软件研究生对于你来说还是很简单的；不过要是基础不太好的话，也不要灰心，毕竟数学考得是数学3，很简单。', '2017-05-09 07:30:31', 3, 5);

-- --------------------------------------------------------

--
-- 表的结构 `answer_comment`
--

CREATE TABLE IF NOT EXISTS `answer_comment` (
  `anid` int(11) NOT NULL,
  `coid` int(11) NOT NULL,
  PRIMARY KEY (`anid`,`coid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `answer_comment`
--

INSERT INTO `answer_comment` (`anid`, `coid`) VALUES
(1, 3),
(1, 4),
(3, 1),
(6, 2);

-- --------------------------------------------------------

--
-- 表的结构 `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL,
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `comment`
--

INSERT INTO `comment` (`id`, `content`, `createtime`) VALUES
(1, '我觉得他说有点道理', '2017-05-20 11:51:43'),
(2, '这个回答有点太不具体了。', '2017-05-20 11:51:43'),
(3, '咖啡厅还有露天的环境，确实感觉不错。', '2017-05-20 11:51:43'),
(4, '其实八教那边也有很多自习室。', '2017-05-20 11:58:14');

-- --------------------------------------------------------

--
-- 表的结构 `post`
--

CREATE TABLE IF NOT EXISTS `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(100) NOT NULL,
  `type` int(11) DEFAULT '0',
  `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `followNumber` int(11) DEFAULT '0',
  `title` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `post`
--

INSERT INTO `post` (`id`, `content`, `type`, `createtime`, `followNumber`, `title`) VALUES
(4, '交大哪里的美食好吃？', 1, '2017-05-09 03:07:11', 3, '交大美食？'),
(5, '交大哪里上自习安静？', 3, '2017-05-09 03:07:47', 4, '自习的好地方？'),
(6, '交大考研软件专业容易吗？', 2, '2017-05-09 03:08:15', 5, '考研问题？');

-- --------------------------------------------------------

--
-- 表的结构 `post_answer`
--

CREATE TABLE IF NOT EXISTS `post_answer` (
  `pid` int(11) DEFAULT NULL,
  `anid` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `post_answer`
--

INSERT INTO `post_answer` (`pid`, `anid`) VALUES
(5, 1),
(5, 2),
(5, 3),
(4, 5),
(4, 4),
(6, 6);

-- --------------------------------------------------------

--
-- 表的结构 `topic`
--

CREATE TABLE IF NOT EXISTS `topic` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `tconent` varchar(20) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`tid`),
  UNIQUE KEY `tconent` (`tconent`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `topic`
--

INSERT INTO `topic` (`tid`, `tconent`, `image`) VALUES
(1, '生活', 'http://139.199.5.64/bjtu/1.jpg'),
(2, '科技', 'http://139.199.5.64/bjtu/1.jpg'),
(3, '美食', 'http://139.199.5.64/bjtu/1.jpg'),
(4, '阅读', 'http://139.199.5.64/bjtu/1.jpg'),
(5, '社团', 'http://139.199.5.64/bjtu/1.jpg'),
(6, '考研', 'http://139.199.5.64/bjtu/1.jpg'),
(7, '新生', 'http://139.199.5.64/bjtu/1.jpg'),
(8, '选课', 'http://139.199.5.64/bjtu/1.jpg'),
(9, '健身', 'http://139.199.5.64/bjtu/1.jpg'),
(10, '旅游', 'http://139.199.5.64/bjtu/1.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(20) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  `image` varchar(200) DEFAULT 'http://139.199.5.64/bjtu/1.jpg',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `phone_UNIQUE` (`phone`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `email`, `phone`, `name`, `password`, `image`) VALUES
(1, '14301144@bjtu.edu.cn', '18810792528', 'czh', '123456', 'http://139.199.5.64/1.jpg'),
(2, '14301141@bjtu.edu.cn', '18810792527', 'zx', '123465', 'http://139.199.5.64/1.jpg'),
(3, '14301140@bjtu.edu.cn', '18810792524', 'bf', '123465', 'http://139.199.5.64/1.jpg'),
(4, '14301143@bjtu.eud.cn', '18810792520', 'czy', '123465', 'http://139.199.5.64/1.jpg'),
(5, '13301002@bjtu.edu.cn', '18810792529', 'cy', '123456', 'http://139.199.5.64/1.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `user_answer`
--

CREATE TABLE IF NOT EXISTS `user_answer` (
  `uid` int(11) NOT NULL,
  `anid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`,`anid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_answer`
--

INSERT INTO `user_answer` (`uid`, `anid`) VALUES
(1, 3),
(4, 1),
(4, 4),
(4, 6),
(5, 2),
(5, 5);

-- --------------------------------------------------------

--
-- 表的结构 `user_comment`
--

CREATE TABLE IF NOT EXISTS `user_comment` (
  `uid` int(11) NOT NULL,
  `coid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`,`coid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_comment`
--

INSERT INTO `user_comment` (`uid`, `coid`) VALUES
(4, 1),
(4, 2),
(4, 4),
(5, 3);

-- --------------------------------------------------------

--
-- 表的结构 `user_post`
--

CREATE TABLE IF NOT EXISTS `user_post` (
  `uid` int(11) NOT NULL,
  `pid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`,`pid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_post`
--

INSERT INTO `user_post` (`uid`, `pid`) VALUES
(1, 4),
(2, 5),
(3, 6);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
