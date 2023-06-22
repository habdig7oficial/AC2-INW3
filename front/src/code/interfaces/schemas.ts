export interface rows {
    DEPARTAMENTO_CIRCUNSCRICAO: string;
    SECCIONAL_CIRCUNSCRICAO: string;
    MUNICIPIO_CIRCUNSCRICAO: string;
    DP_CIRCUNSCRICAO: string;
    HD: string;
    NVITIMAS: string;
    ID_DELEGACIA: string;
    MES_ESTATISTICA: string;
    ANO_ESTATISTICA: string;
    DATAHORA_REGISTRO_BO: string;
    NUM_BO: string;
    ANO_BO: string;
    MUNICIPIO_ELABORACAO: string;
    DP_ELABORACAO: string;
    SEC_ELABORACAO: string;
    DEP_ELABORACAO: string;
    DATA_FATO: string;
    HORA_FATO: string;
    DESC_TIPOLOCAL: string;
    LOGRADOURO: string;
    NUMERO_LOGRADOURO: string;
    LATITUDE: string;
    LONGITUDE: string;
    TIPO_PESSOA: string;
    SEXO_PESSOA: string;
    IDADE_PESSOA: string;
    DATA_NASCIMENTO_PESSOA: string;
    COR_PELE: string;
    PROFISSAO: string;
    NATUREZA_APURADA: string;
    DESDOBRAMENTO: string 
}

interface table{
    tableID: number;
    name: string
}

export default interface feminicidio{
    command: string;
    fields: Array<table>;
    rows: rows[];
    rowCount: number;
    rowAsArray: boolean;
}