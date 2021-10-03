-- SEQUENCE: public.consumosSec

-- DROP SEQUENCE public."consumosSec";

CREATE SEQUENCE public."consumosSec"
    INCREMENT 13
    START 50000000
    MINVALUE 50000000
    MAXVALUE 99999999
    CACHE 1;

ALTER SEQUENCE public."consumosSec"
    OWNER TO postgres;

COMMENT ON SEQUENCE public."consumosSec"
    IS 'Secuencia para numero de autorizacion ';