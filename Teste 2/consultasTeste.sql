use TesteEstagio;
select * from Aluno;
/*1*/
select a.nome, t.id
from Aluno a, Aluno_Turma atu, Turma t, Professor p
where a.id =atu.aluno_id and atu.aluno_id = t.id and
t.professor_id = p.id and p.nome = 'Joao Pedro'
GROUP BY a.nome,t.id;
/*2*/
select t.dia_da_semana, d.nome from Turma t, Disciplina d where t.disciplina_id = d.id and d.nome = 'Matematica';

/*3*/
select a.nome
from Aluno a,Aluno_Turma atur, Turma t, Disciplina d
where a.id = atur.aluno_id and atur.turma_id = t.id and t.disciplina_id =d.id and
d.nome = 'Matematica'
union
select a.nome
from Aluno a,Aluno_Turma atur, Turma t, Disciplina d
where a.id = atur.aluno_id and atur.turma_id = t.id and t.disciplina_id =d.id and
d.nome = 'Fisica';

/*4*/
select d.nome
from Disciplina d left join turma t on
d.id=t.disciplina_id 
where t.id is null;
/*5*/
select a.nome
from Aluno a,Aluno_Turma atur, Turma t, Disciplina d
where a.id = atur.aluno_id and atur.turma_id = t.id and t.disciplina_id =d.id and
d.nome = 'Matematica'
except
select a.nome
from Aluno a,Aluno_Turma atur, Turma t, Disciplina d
where a.id = atur.aluno_id and atur.turma_id = t.id and t.disciplina_id =d.id and
d.nome = 'Quimica';
