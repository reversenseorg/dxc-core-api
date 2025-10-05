

export enum DataOperation {
    SOURCING,
    PROCESSING,
    STORING,
    SHARING,
    ENCRYPTING,
    DECRYPTING,
    HASHING
}

export enum MetadataType {
    TEXT,
    ANY,
    URI,
    PARAM
}

export enum MetadataTopic {
    DFLOW_STEP="step",
    IMPACT="impact",
    CRITICITY="criticity",
    GROUP='grp',
    CATEGORY='category',
    ADVISORY='recommandation',
    RECO="recommandation",
    COUNTRY='country',
    PURPOSE='sbom.purpose',
    WEBSITE='www',
    COMPANY='company',
    REVISION='rev',
    EXTRACT='ext',
    CTRL='ctrl',
    PREFERED_ABI='pabi',
    OS='os',

    FILE_HEADER='file.header',
    FILE_DATA='file.data',

    CPE="cpe",

    CPE_ID="cpeid",
    CVE_ID="cveid",
    CWE_ID="cweid",

    VENDOR_LINK="vendorlnk",
    PRODUCT_LINK="productlnk",
    VERSION_LINK="verslnk",
    PROJECT_LINK='prjlnk',
    CHANGELOG='chloglnk',
    EXPLOIT_LNK='expltlnk'
}


export interface Metadata {
    key:string|MetadataTopic;
    type:MetadataType;
    value:any|DataOperation;
}
