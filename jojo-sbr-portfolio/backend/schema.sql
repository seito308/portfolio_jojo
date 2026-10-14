-- ============================================================================
-- STEEL BALL RUN PORTFOLIO — DATABASE SCHEMA (PostgreSQL & MySQL Compatible)
-- ============================================================================

CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  sender_name VARCHAR(120) NOT NULL,
  sender_email VARCHAR(180) NOT NULL,
  subject VARCHAR(200) NOT NULL,
  message_body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS project_telemetry (
  id SERIAL PRIMARY KEY,
  project_slug VARCHAR(100) NOT NULL UNIQUE,
  stage_number VARCHAR(60) NOT NULL,
  stand_name VARCHAR(100) NOT NULL,
  views_count INTEGER DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO project_telemetry (project_slug, stage_number, stand_name, views_count)
VALUES
  ('golden-spin-commerce', 'STAGE 01 // SAN DIEGO BEACH', 'TUSK ACT 4', 1618),
  ('d4c-multiverse-collab', 'STAGE 02 // ROCKY MOUNTAINS', 'DIRTY DEEDS DONE DIRT CHEAP', 1024),
  ('gyro-ballbreaker-analytics', 'STAGE 03 // PHILADELPHIA COAST', 'BALL BREAKER', 890);
