-- FUNCTION: public.miconsumo(bigint, character varying, character varying, integer, money, character varying)

-- DROP FUNCTION public.miconsumo(bigint, character varying, character varying, integer, money, character varying);

CREATE OR REPLACE FUNCTION public.miconsumo(
	pnumerotarjeta bigint,
	pnombretarjeta character varying,
	pfechavenc character varying,
	pnumeroseg integer,
	pmonto money,
	pnombretienda character varying)
    RETURNS integer
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE vConteoTarjetas int;
  DECLARE vmonto_disponible money;
  DECLARE vmonto_autorizado money;
  DECLARE vfecha date;
  DECLARE vResultado int;
  Declare vFechat int;
  Declare vFechah int;

BEGIN

	vResultado := 0;
	vmonto_disponible :=0;
	vmonto_autorizado :=0;               

	--validamos que el monto sea correcto
	if pMonto>cast(0 as money) then

		--Se hace conteo para determinar si existe la tarjeta
		SELECT count(*) INTO vConteoTarjetas FROM tarjetas WHERE numero = pNumeroTarjeta 
		and nombre_titular = pNombreTarjeta
		and to_char(fecha_vencimiento,'YYYYMM') = pFechaVenc
		and ccv = pNumeroSeg;

		if vConteoTarjetas = 1 then
		
			--Se verifica que monto sea menor al disponible && autorizado
			SELECT monto_autorizado, monto_disponible into vmonto_autorizado, vmonto_disponible FROM tarjetas WHERE numero = pNumeroTarjeta;
			
			if pMonto <= vmonto_disponible and pMonto <= vmonto_autorizado then
				--verificamos que la fecha sea menor a la fecha de vencimiento tarjeta

				vFechah = cast(to_char(now(),'YYYYMM') as integer);
				vFechat = cast(pfechavenc as integer);

				if vFechat >= vFechah then

					--obtenemos el numero de autorizacion
					SELECT nextval('public."consumosSec"') into vResultado;

					--aplica la resta del monto al monto disponible de la tarjeta
					update tarjetas set monto_disponible = monto_disponible - pMonto where numero = pNumeroTarjeta;                                             

					--insertamos la transaccion en la tabla de consumos
					INSERT INTO consumos(numero_consumo,monto_consumo,fecha_consumo,no_tarjeta,nombre_tienda) 
					VALUES (vResultado, pMonto, now(), pNumeroTarjeta, pNombreTienda);

				end if;
			end if;
		end if;
	end if;

	RETURN vResultado;
END;
$BODY$;

ALTER FUNCTION public.miconsumo(bigint, character varying, character varying, integer, money, character varying)
    OWNER TO app_user;
