create table Employee (
    empID varchar(50) unique not null,
    empName varchar(50) not null,
    email varchar(50) not null,
    mngrID varchar(50) foreign key references Manager(mngrID),
    adminID varchar(50) foreign key references Administrator(adminID),
    primary key(empID)
);

create table Manager (
    mngrID varchar(50) unique not null,
    mngrName varchar(50) not null,
    email varchar(50) not null,
    adminID varchar(50) foreign key references Administrator(adminID),
    primary key(mngrID)
);

create table Administrator (
    adminID varchar(50) unique not null,
    admName varchar(50) not null,
    email varchar(50) not null,
    primary key(adminID)
);

create table eteTask (
    emp1 in (select e1.empID from Employee e1),
    emp2 in (select e2.empID from Employee e2),
    name1 in (select empName from Employee e1 where e1.empID = emp1),
    name2 in (select empName from Employee e2 where e2.empID = emp2),
    taskDscrp text(65535),
    isComplete boolean,
    deadline datetime,
    priorityVal int
);
create table mteTask (
    mid in (select m.mngrID from Manager m),
    eid in (select e.empID from Employee e),
    mngrName in (select mngrName from Manager m where m.mngrID = mid),
    empName in (select empName from Employee e where e.empID = eid),
    taskDscrp text(65535),
    isComplete boolean,
    deadline datetime,
    priorityVal int
);
create table ateTask (
    aid in (select a.adminID from Administrator a),
    eid in (select e.empID from Employee e),
    adminName in (select adminName from Administrator a where a.adminID = aid),
    empName in (select empName from Employee e where e.empID = eid),
    taskDscrp text(65535),
    isComplete boolean,
    deadline datetime,
    priorityVal int
);
create table ateTrAss (
    aid in (select a.adminID from Administrator a),
    eid in (select e.empID from Employee e),
    adminName in (select adminName from Administrator a where a.adminID = aid),
    empName in (select empName from Employee e where e.empID = eid),
    trainAssnmnt text(65535),
    isComplete boolean,
    deadline datetime,
    priorityVal int
);
create table etmPTO (
    mid in (select m.mngrID from Manager m),
    eid in (select e.empID from Employee e),
    mngrName in (select mngrName from Manager m where m.mngrID = mid),
    empName in (select empName from Employee e where e.empID = eid),
    PTOrequest text(65535),
    isApproved boolean,
    startdate datetime,
    enddate datetime,
    approvalDate datetime,
    priorityVal int
);
create table etePerfRev (
    emp1 in (select e1.empID from Employee e1),
    emp2 in (select e2.empID from Employee e2),
    name1 in (select empName from Employee e1 where e1.empID = emp1),
    name2 in (select empName from Employee e2 where e2.empID = emp2),
    comments text(65535),
    isComplete boolean,
    deadline datetime,
    rating int
);
create table mtePerfRev (
    mid in (select m.mngrID from Manager m),
    eid in (select e.empID from Employee e),
    mngrName in (select mngrName from Manager m where m.mngrID = mid),
    empName in (select empName from Employee e where e.empID = eid),
    comments text(65535),
    isComplete boolean,
    deadline datetime,
    rating int
);

create table mtmTask ();
create table atmTask ();
create table atmTrAss ();
create table mtmPerfRev ();

create table ataTask ();
create table ataTrAss ();