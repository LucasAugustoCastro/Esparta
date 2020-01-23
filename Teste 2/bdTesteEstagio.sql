DROP DATABASE TesteEstagio;
create database TesteEstagio;
use TesteEstagio;
create table Aluno(
 id int primary key,
 Nome varchar(45)
);
create table Disciplina(
id int primary key,
nome varchar(45)
);
create table Professor(
id int primary key,
nome varchar(45)
);
create table Turma(
id int primary key,
dia_da_semana VARCHAR(45),
horario varchar(45),
disciplina_id int foreign key references Disciplina(id),
professor_id int foreign key references Professor(id),
aluno_id int 
);
create table Aluno_Turma(
aluno_id int foreign key references Aluno(id),
turma_id int foreign key references Turma(id)

);