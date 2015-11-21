var validateRegExp = {
    decmal: "^([+-]?)\\d*\\.\\d+$",
    // ������
    decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",
    // ��������
    decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",
    // ��������
    decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",
    // ������
    decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",
    // �Ǹ����������������� + 0��
    decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",
    // �������������������� +
    // 0��
    intege: "^-?[1-9]\\d*$",
    // ����
    intege1: "^[1-9]\\d*$",
    // ������
    intege2: "^-[1-9]\\d*$",
    // ������
    num: "^([+-]?)\\d*\\.?\\d+$",
    // ����
    num1: "^[1-9]\\d*|0$",
    // ������������ + 0��
    num2: "^-[1-9]\\d*|0$",
    // ������������ + 0��
    ascii: "^[\\x00-\\xFF]+$",
    // ��ACSII�ַ�
    chinese: "^[\\u4e00-\\u9fa5]+$",
    // ������
    color: "^[a-fA-F0-9]{6}$",
    // ��ɫ
    date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",
    // ����
    email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
    // �ʼ�
    idcard: "^[1-9]([0-9]{14}|[0-9]{17})$",
    // ���֤
    ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",
    // ip��ַ
    letter: "^[A-Za-z]+$",
    // ��ĸ
    letter_l: "^[a-z]+$",
    // Сд��ĸ
    letter_u: "^[A-Z]+$",
    // ��д��ĸ
    mobile: "^0?(13|15|18|14|17)[0-9]{9}$",
    // �ֻ�
    notempty: "^\\S+$",
    // �ǿ�
    password: "^.*[A-Za-z0-9\\w_-]+.*$",
    // ����
    fullNumber: "^[0-9]+$",
    // ����
    picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",
    // ͼƬ
    qq: "^[1-9]*[1-9][0-9]*$",
    // QQ����
    rar: "(.*)\\.(rar|zip|7zip|tgz)$",
    // ѹ���ļ�
    tel: "^[0-9\-()����]{7,18}$",
    // �绰����ĺ���(������֤��������,��������,�ֻ���)
    url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",
    // url
    username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$",
    // ����
    deptname: "^[A-Za-z0-9_()����\\-\\u4e00-\\u9fa5]+$",
    // ��λ��
    zipcode: "^\\d{6}$",
    // �ʱ�
    realname: "^[A-Za-z\\u4e00-\\u9fa5]+$",
    // ��ʵ����
    companyname: "^[A-Za-z0-9_()����\\-\\u4e00-\\u9fa5]+$",
    companyaddr: "^[A-Za-z0-9_()����\\#\\-\\u4e00-\\u9fa5]+$",
    companysite: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&#=]*)?$"
};

// ��֤����
var validateRules = {
    checkType: function(element) {
        return (element.attr("type") == "checkbox" || element.attr("type") == "radio" || element.attr("rel") == "select");
    },
    betweenLength: function(str, _min, _max) {
        return (str.length >= _min && str.length <= _max);
    },
    isNull: function(str) {
        return (str == "" || typeof str != "string");
    },
    isUid: function(str) {
        return new RegExp(validateRegExp.username).test(str);
    },
    fullNumberName: function(str) {
        return new RegExp(validateRegExp.fullNumber).test(str);
    },
    isPwd: function(str) {
        return /^.*([\W_a-zA-z0-9-])+.*$/i.test(str);
    },
    isPwdRepeat: function(str1, str2) {
        return (str1 == str2);
    },
    isEmail: function(str) {
        return new RegExp(validateRegExp.email).test(str);
    },
    isTel: function(str) {
        return new RegExp(validateRegExp.tel).test(str);
    },
    isMobile: function(str) {
        return new RegExp(validateRegExp.mobile).test(str);
    },
    isRealName: function(str) {
        return new RegExp(validateRegExp.realname).test(str);
    },
    isCompanyname: function(str) {
        return new RegExp(validateRegExp.companyname).test(str);
    },
    isCompanyaddr: function(str) {
        return new RegExp(validateRegExp.companyaddr).test(str);
    },
    isCompanysite: function(str) {
        return new RegExp(validateRegExp.companysite).test(str);
    }
};