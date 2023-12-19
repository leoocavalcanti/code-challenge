# Insira aqui as query utilizadas

## Todas as agendas

```sql
SELECT * FROM schedules;
```

## Todas as agendas com a tag "Dev"

```sql
SELECT schedule.*
FROM schedules schedule
JOIN schedule_tags schedule_tag ON schedule.id = schedule_tag.schedule_id
JOIN tags tag ON schedule_tag.tag_id = tag.id
WHERE tag.title = 'Dev';
```

## Todas as agendas que acontecerão no dia 10 de maio

```sql
SELECT *
FROM schedules
WHERE DATE(start_time) = '2023-05-10';
```

## Todas as agendas que o usuário Luís participou


```sql
SELECT schedule.*
FROM schedules schedule
JOIN schedule_users schedule_user ON schedule.id = schedule_user.schedule_id
JOIN users user ON schedule_user.user_id = user.id
WHERE user.id = 9;
```
