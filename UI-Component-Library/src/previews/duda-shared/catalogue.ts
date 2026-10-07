export type DudaKind =
  | 'dynamic'
  | 'access'
  | 'analytics'
  | 'audit'
  | 'backup'
  | 'banner'
  | 'blog'
  | 'card'
  | 'cards'
  | 'category'
  | 'checklist'
  | 'collection'
  | 'comments'
  | 'design'
  | 'device'
  | 'dialog'
  | 'editor'
  | 'empty'
  | 'form'
  | 'gallery'
  | 'integrations'
  | 'menu'
  | 'nav'
  | 'overview'
  | 'pages'
  | 'progress'
  | 'role'
  | 'roles'
  | 'seo'
  | 'shell'
  | 'sort'
  | 'submission'
  | 'table'
  | 'theme'
  | 'tree'
  | 'widgets'
  | 'workspace';
export interface DudaDefinition {
  id: string;
  title: string;
  kind: DudaKind;
  controls: string[];
  evidence: { screenshot: string; sha256: string; snapshots: { path: string; sha256: string }[] }[];
  states: { id: string; title: string; provenance: string; evidence?: string }[];
}
export const dudaDefinitions: DudaDefinition[] = [
  {
    id: 'duda-application-shell',
    title: 'Duda Dashboard Application Shell',
    kind: 'shell',
    controls: ['Projects', 'Clients & Team', 'Custom Assets', 'White Label', 'Business Tools'],
    evidence: [
      {
        screenshot: '01-dashboard.jpg',
        sha256: 'ee25c0887fa65b322a0769ccc0c9d0eeb58116261283a9365c268a150ecb8270',
        snapshots: [
          {
            path: '01-dashboard-ax.txt',
            sha256: 'f5d68d83fd04144b45e87d672b1a1ffc9a68ec698c58a388553169665a7f4020',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '01-dashboard.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-blank-page-and-rename',
    title: 'Duda Blank Page Creation and Rename',
    kind: 'dialog',
    controls: ['Page Name', 'Add Page', 'Rename'],
    evidence: [
      {
        screenshot: '74-blank-page-dialog.jpg',
        sha256: '5ce02c41c619eda0455556db7019b6a744685698490a80f17f6df4dc5216a595',
        snapshots: [
          {
            path: '74-blank-page-dialog-dom.txt',
            sha256: '49823681994972de5c60b4615a4735af9bf86a4e4de001844df9aa7a936c7783',
          },
          {
            path: '74-blank-page-dialog-ax.txt',
            sha256: 'fbd7b580a45ecfcd10850806f7844dd07cfd6898d970cd678ff7838e7bb71018',
          },
        ],
      },
      {
        screenshot: '78-page-rename-input.jpg',
        sha256: '457b68c4c86ab2b54dd7e7228b1cd5dc60cfa4517cb5bab8b2ada976e6e0b3f6',
        snapshots: [
          {
            path: '78-page-rename-input-dom.txt',
            sha256: '684378f2c3856e8445ea958d677d80fff78fa01a0b6f6df55f34f211db2e5c87',
          },
          {
            path: '78-page-rename-input-ax.txt',
            sha256: '2f1ee2f5e8839f870d2c6221860432a18162f08429978053d40bd5b89b3a0454',
          },
        ],
      },
      {
        screenshot: '79-page-renamed.jpg',
        sha256: '0e21d7744261d68e6e0b6672133c71b08de930a19f464d39323e454e3e39fcba',
        snapshots: [
          {
            path: '79-page-renamed-dom.txt',
            sha256: '192cfb55aad6ff4144ae702340e2d98002e12e0864a7693e38c2f99dcd65455a',
          },
          {
            path: '79-page-renamed-ax.txt',
            sha256: '7aba867352cb591e0318458a4b98fd257746d9a5b4f167134021cb3a5c091c94',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '74-blank-page-dialog.jpg',
      },
      {
        id: 'validation',
        title: 'RECONSTRUCTION \u00b7 local required validation',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-blog-manager',
    title: 'Duda Blog Post Manager',
    kind: 'blog',
    controls: ['Posts', 'Settings', 'Layouts', 'Import', 'SEO', 'New Post', 'Filter'],
    evidence: [
      {
        screenshot: '52-blog-post-manager.jpg',
        sha256: 'd2180c431a8cc6e16c7d1d05612aec9526ca514acf43f1ca6ff0b96efe68eb55',
        snapshots: [
          {
            path: '52-blog-post-manager-dom.txt',
            sha256: '73e95d1a7f7593f3535b5b1fc245ab80b81eaa028658df91a596bce7d6b1bc60',
          },
          {
            path: '52-blog-post-manager-ax.txt',
            sha256: 'b74abc02c8c90c3a8e6ad1d9af486ca11fafb15a605d81a23e32d0967fe4bd0d',
          },
        ],
      },
      {
        screenshot: '53-blog-post-list.jpg',
        sha256: 'cfc31437af82b7ee49a3d09d09467deb8b223bf66dff6318e4b7c1fa2bc89bcd',
        snapshots: [
          {
            path: '53-blog-post-list-dom.txt',
            sha256: '47b20eae97f505cec8b0902b4a6a2ff4ab9ba4f1545842ffc90985867a44b426',
          },
          {
            path: '53-blog-post-list-ax.txt',
            sha256: '454e14e5f33876663210a1c9a7bcbe7ce0abd41711b244b9419a61c32f9e8a3f',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '52-blog-post-manager.jpg',
      },
      {
        id: 'empty',
        title: 'RECONSTRUCTION \u00b7 empty/filter state',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'populated',
        title: 'RECONSTRUCTION \u00b7 fictional populated data',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-business-tools-menu',
    title: 'Duda Business Tools Navigation',
    kind: 'menu',
    controls: [
      'API Access',
      'Zapier',
      'Get More Clients',
      'Simple Editor (DIY)',
      'Onboard & Manage at Scale',
    ],
    evidence: [
      {
        screenshot: '05-business-menu.jpg',
        sha256: '08d02564893b0e99892606c5e05953037a7d38b6a1c230383d2057331dbcaa3d',
        snapshots: [
          {
            path: '05-business-menu-ax.txt',
            sha256: 'f5d68d83fd04144b45e87d672b1a1ffc9a68ec698c58a388553169665a7f4020',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '05-business-menu.jpg',
      },
      {
        id: 'closed',
        title: 'RECONSTRUCTION \u00b7 disclosure closed',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-canvas-layer-tree',
    title: 'Duda Canvas Layer Tree',
    kind: 'tree',
    controls: ['Header', 'Section', 'Section 2', 'Footer'],
    evidence: [
      {
        screenshot: '48-layer-tree.jpg',
        sha256: 'e681ec1b3921654e031a80c2f2a499543dedf848411408291227017adeb78bec',
        snapshots: [
          {
            path: '48-layer-tree-dom.txt',
            sha256: 'dcb1599bbd75e4119bcf126c1652927b2567a80d763e56d594413c0c3ac44cba',
          },
          {
            path: '48-layer-tree-ax.txt',
            sha256: 'c427c847c8d77dd77cdb245f190467fa8564ef79ec4ccad2ae6d08a014a867de',
          },
        ],
      },
      {
        screenshot: '49-layer-expanded.jpg',
        sha256: 'bafa6fc09cd7135df34ce12a116d0be4138b08645a2968d70b3fd0364c930a24',
        snapshots: [
          {
            path: '49-layer-expanded-dom.txt',
            sha256: '915aa98295561d31c2ff1fdfebcc4ded1ca38a4d0fe8bec589eb5b602bd66b20',
          },
          {
            path: '49-layer-expanded-ax.txt',
            sha256: 'b74abc02c8c90c3a8e6ad1d9af486ca11fafb15a605d81a23e32d0967fe4bd0d',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '48-layer-tree.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-client-list-empty',
    title: 'Duda Client Management Empty Table',
    kind: 'table',
    controls: ['Create Client'],
    evidence: [
      {
        screenshot: '12-clients-empty.jpg',
        sha256: 'af5f6643adabbcb17d62e6cf817702de077d1c4a57945a00124b2d938db2017a',
        snapshots: [
          {
            path: '12-clients-empty-ax.txt',
            sha256: 'd305e212de988d09b412a7335cce8e4847e24d703479f486ec58cd79696930bc',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '12-clients-empty.jpg',
      },
      {
        id: 'empty',
        title: 'RECONSTRUCTION \u00b7 empty/filter state',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'populated',
        title: 'RECONSTRUCTION \u00b7 fictional populated data',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-cms-content-navigation',
    title: 'Duda CMS Content Navigation',
    kind: 'nav',
    controls: [
      'Import Content',
      'Media Manager',
      'Business Info',
      'Business Text',
      'Business Images',
      'Find and Replace',
      'Collections',
    ],
    evidence: [
      {
        screenshot: '30-cms-navigation.jpg',
        sha256: 'd533b44205c21725fe79b647fbe8c352c4d6eabd9387b11d5b51f72b74b8d76a',
        snapshots: [
          {
            path: '30-cms-navigation-dom.txt',
            sha256: '2dd5f522123bad018f79174756a72c64026bc7117df8fef525445dc260bc113d',
          },
          {
            path: '30-cms-navigation-ax.txt',
            sha256: '6cb55deeefaeb727b04cc2f42c0e148074601db1fa602d7efa662de1f1f73723',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '30-cms-navigation.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-collaboration-access',
    title: 'Duda Collaboration Notification Controls',
    kind: 'access',
    controls: ['Create Client', 'Preview notification email', 'Notified Team Members'],
    evidence: [
      {
        screenshot: '51-collaboration-team.jpg',
        sha256: '6134156537772d600f390c093720c2d88ce608ec6bb460c0010e7c1d780e323c',
        snapshots: [
          {
            path: '51-collaboration-team-dom.txt',
            sha256: '2ad20493fbc455226e2f544edc97efceb309cc030ae82c435b0e7449662f9126',
          },
          {
            path: '51-collaboration-team-ax.txt',
            sha256: '5c018968c8091594aecb304a1bd080cdbd02ac7f7bec6857508f8e815586713c',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '51-collaboration-team.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-collection-row-editor',
    title: 'Duda Collection Row Detail and Search',
    kind: 'collection',
    controls: ['Add Row', 'Edit row', 'Search by'],
    evidence: [
      {
        screenshot: '105-row-api-success.jpg',
        sha256: '142017f472dc619355ce0ee406d46e9d03e59c8f12a995e82c21c1c5ce2b46d6',
        snapshots: [
          {
            path: '105-row-api-success-dom.txt',
            sha256: '4374dfcdc98fb91cd3f0d9e055c0b19efd456e81b4402e2055307d702f422d87',
          },
          {
            path: '105-row-api-success-ax.txt',
            sha256: 'b4e927f7770f7f553927f8a6b40b139466b10e8746cec7a46fdedccd6106a257',
          },
        ],
      },
      {
        screenshot: '106-row-api-restored.jpg',
        sha256: 'f107125ae9f4561ae8e02e7a23bab11ff2d2f1bb2994631ac560291e2be2506c',
        snapshots: [
          {
            path: '106-row-api-restored-dom.txt',
            sha256: '7704d5b62fe21246bb5f8cc910ce659612985e29cdb9a921c065868e587fadee',
          },
          {
            path: '106-row-api-restored-ax.txt',
            sha256: 'ca9c2e1a2628f95ac11f3fe47482f7c3b8156c3d7defbddf6c119c6990479b12',
          },
        ],
      },
      {
        screenshot: '107-number-field-created.jpg',
        sha256: '18099a1734dbaf3edf2e5180b85aebcf185353070cef3c35bef8c50dc26b8633',
        snapshots: [
          {
            path: '107-number-field-created-dom.txt',
            sha256: '238623eefa271fa3ecdbe1c13f73b94725c14542f37e3f7a3ad42ed87c133f5f',
          },
          {
            path: '107-number-field-created-ax.txt',
            sha256: '456a066676bc6ec3eac816fe98e7f47d4944dc1a4e8350bbfeae5574c563bac5',
          },
        ],
      },
      {
        screenshot: '108-number-negative-decimal.jpg',
        sha256: 'e5085b5e95fc43ffdcbb25e1e66661eea639e64edff45071d032dd09a29407b0',
        snapshots: [
          {
            path: '108-number-negative-decimal-dom.txt',
            sha256: '5e2dedc30e81661f97346bad4ba13978c9ae62790dfbcd6d1259d95f369788a7',
          },
          {
            path: '108-number-negative-decimal-ax.txt',
            sha256: '86f9455d4eb3d95fad58fcba9f43f216d5108d558bb8fc2fdb7a50bafbfc156a',
          },
        ],
      },
      {
        screenshot: '109-number-keyboard-step.jpg',
        sha256: 'c09035988d549084c563a363e751da2cdea98bc19e9d06e56f4e858ba4f1a470',
        snapshots: [
          {
            path: '109-number-keyboard-step-dom.txt',
            sha256: 'eed64bc5a528bcc48bcdcd819818bd4fd3015b29685204ae70fef5061fb4f216',
          },
          {
            path: '109-number-keyboard-step-ax.txt',
            sha256: '4f3a971fd8fd9367118560e3609ffc1cae6ac96b30e66c733df4351cde0124f9',
          },
        ],
      },
      {
        screenshot: '110-number-cleared.jpg',
        sha256: 'ec986950ea8328f09c882f06f85a24934ec731e04f874092299d5bd771f57c32',
        snapshots: [
          {
            path: '110-number-cleared-dom.txt',
            sha256: '9bd4213bb4f7a011a0d526629d0429471d56975c1a66581a279436d69034b627',
          },
          {
            path: '110-number-cleared-ax.txt',
            sha256: '733417194ce3ee56896d8dee70b124959353de11e227aa8206f5f6a8a0dc7c5e',
          },
        ],
      },
      {
        screenshot: '111-number-reload-persistence.jpg',
        sha256: '33686029e6b588aac383fb2d2a8167a28469d81f249402cdee75a0e5658ab2ee',
        snapshots: [
          {
            path: '111-number-reload-persistence-dom.txt',
            sha256: 'f5ce641cdc117ff8d94c9e2f847bf9384749c6c1364a60de8671acbdd9c839a4',
          },
          {
            path: '111-number-reload-persistence-ax.txt',
            sha256: '4345b9daa0a333370c1cab63d77da3c5242c28119c7c9d8a3fc2b19e48aa3682',
          },
        ],
      },
      {
        screenshot: '101-collection-duplicate-item.jpg',
        sha256: 'a96640cf14629e0b50e59c7c882c740d1ab94a2daa41ad4cb27e27f3f58cbeaf',
        snapshots: [
          {
            path: '101-collection-duplicate-item-dom.txt',
            sha256: '29284ebde3ad607e450146684655bb0b2b3b8ff0d809bc01fab03f6aef882c03',
          },
          {
            path: '101-collection-duplicate-item-ax.txt',
            sha256: 'd7d1f727de7e0630488780a8d6369a825ddb379411b98bf86bf87adde6fb6727',
          },
        ],
      },
      {
        screenshot: '102-collection-empty-item.jpg',
        sha256: '62e74b9d0297a5e58509c843f7a549704fc97622a45e3c88d4f0f83961d9e261',
        snapshots: [
          {
            path: '102-collection-empty-item-dom.txt',
            sha256: '961876f4f0a3e37a9543ab473209a6754ec1bc6d4e01ddd5bdf24406bc90c9e7',
          },
          {
            path: '102-collection-empty-item-ax.txt',
            sha256: 'e1ed917915ddc2b67c37d2a8ba22dec63c0da9bb3ff610ce1ce22a70b56b69c8',
          },
        ],
      },
      {
        screenshot: '103-row-escape-restored.jpg',
        sha256: 'e9e4003a4cf4158e07833e980df1728eb5efeb099ec595ab16d71c028d2d79e6',
        snapshots: [
          {
            path: '103-row-escape-restored-dom.txt',
            sha256: '07d61b008b81e9840b9a356906192134156c348e93fc5512a4fc475d104924e8',
          },
          {
            path: '103-row-escape-restored-ax.txt',
            sha256: '9ba06c859a553978e53fe60ba6c88755a9785308dbfa5d84d3a04ebbc105ff07',
          },
        ],
      },
      {
        screenshot: '104-validation-restored-reload.jpg',
        sha256: '980d06f7ec0196fbbd611f26b167fbf128b90579ddedf754e91a09e3d3a7b232',
        snapshots: [
          {
            path: '104-validation-restored-reload-dom.txt',
            sha256: '447da0186ee96e1eae9dd46dabc7d8d72534425ac08fb5ee7f0bf7463bc40d3b',
          },
          {
            path: '104-validation-restored-reload-ax.txt',
            sha256: 'b74abc02c8c90c3a8e6ad1d9af486ca11fafb15a605d81a23e32d0967fe4bd0d',
          },
        ],
      },
      {
        screenshot: '70-collection-row-editor.jpg',
        sha256: 'a46333c062ff575f7e8c12104d4caf078b2755c3040b0194940fb92d04e6bfb8',
        snapshots: [
          {
            path: '70-collection-row-editor-dom.txt',
            sha256: '3d4ec74ba191db084288cd8d357b859417614c971e81dad60c5a125bd0e7bb69',
          },
          {
            path: '70-collection-row-editor-ax.txt',
            sha256: '89ee52e495f7dd50d88428be7fe060bc16fd88b3b4670e8f028b21c5c11b95b1',
          },
        ],
      },
      {
        screenshot: '71-collection-search-empty.jpg',
        sha256: 'aa0f6d9ebc6e7fea4e60a96b15dae2c2b18857f258f04308713ea1b61640712d',
        snapshots: [
          {
            path: '71-collection-search-empty-dom.txt',
            sha256: '3ef774ddcf8a24c2ebbfad04507f0f52b8a5df2ec4cb358c62487050e75e8997',
          },
          {
            path: '71-collection-search-empty-ax.txt',
            sha256: 'd939201f5dbedf63893faf0d3bf302373e9e5a7cb4cb8e594b352d82ba0ce22d',
          },
        ],
      },
      {
        screenshot: '72-collection-populated.jpg',
        sha256: 'f4eb6a6c97354c2c4149616cc1d96f4e9aa34b009d1f785e83a1b6ece2b3aa01',
        snapshots: [
          {
            path: '72-collection-populated-dom.txt',
            sha256: '603c680d7b95e4a7ebe41193cae188fa094d2f4e4b32aebc30f9a5cd268e62c3',
          },
          {
            path: '72-collection-populated-ax.txt',
            sha256: '6e4349ca1dae68794fcf64a98cce6cf74f4ec07fb3ed37f3867bc18ed8a39cfe',
          },
        ],
      },
      {
        screenshot: '73-collection-reload-persistence.jpg',
        sha256: 'd33d32c5784162b87b8bbd700292ed8d31d0368b9c10483e1119df9927510d56',
        snapshots: [
          {
            path: '73-collection-reload-persistence-dom.txt',
            sha256: '447da0186ee96e1eae9dd46dabc7d8d72534425ac08fb5ee7f0bf7463bc40d3b',
          },
          {
            path: '73-collection-reload-persistence-ax.txt',
            sha256: 'b74abc02c8c90c3a8e6ad1d9af486ca11fafb15a605d81a23e32d0967fe4bd0d',
          },
        ],
      },
    ],
    states: [
      {
        id: 'number-decimal',
        title: 'Number negative decimal',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '108-number-negative-decimal.jpg',
      },
      {
        id: 'number-step',
        title: 'Number keyboard increment',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '109-number-keyboard-step.jpg',
      },
      {
        id: 'number-empty',
        title: 'Number empty after reload',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '111-number-reload-persistence.jpg',
      },
      {
        id: 'duplicate-item',
        title: 'Duplicate identifier failure',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '101-collection-duplicate-item.jpg',
      },
      {
        id: 'empty-item',
        title: 'Empty identifier path guidance',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '102-collection-empty-item.jpg',
      },
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '70-collection-row-editor.jpg',
      },
      {
        id: 'empty',
        title: 'OBSERVED structure \u00b7 empty/filter state',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '71-collection-search-empty.jpg',
      },
      {
        id: 'populated',
        title: 'RECONSTRUCTION \u00b7 fictional populated data',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'row-open',
        title: 'OBSERVED structure \u00b7 row detail',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '70-collection-row-editor.jpg',
      },
      {
        id: 'field-error',
        title: 'OBSERVED failure \u00b7 HTTP 400, local simulation',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '67-collection-empty-field-validation.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-collection-source-chooser',
    title: 'Duda Collection Source Chooser',
    kind: 'menu',
    controls: [
      'Start from scratch',
      'Use a template',
      'Create an image collection',
      'External collection',
    ],
    evidence: [
      {
        screenshot: '32-collection-create-menu.jpg',
        sha256: 'b8279a682f757088e6b4d4608cde59e80354bf83e02e24eacbcdd4f58e6755a5',
        snapshots: [
          {
            path: '32-collection-create-menu-dom.txt',
            sha256: '42c2b5e0419f83e3d955979c05c745bacbbfcbadb92c2a32e7108bb9960aa8d0',
          },
          {
            path: '32-collection-create-menu-ax.txt',
            sha256: 'c12c523e9b29626778a4000c43d04df84bd4eacc1e7fde26c7827648905d2c8a',
          },
        ],
      },
      {
        screenshot: '64-collection-source-menu.jpg',
        sha256: 'c10752af980d8dcd58e5b8049bd03f87b854c84a5290855e05b92ab6dbfd66f4',
        snapshots: [
          {
            path: '64-collection-source-menu-dom.txt',
            sha256: '2a66bcb3b6a93e46b1acb90be86adee319d7610d8073a2db5e9ae31f9fab95ef',
          },
          {
            path: '64-collection-source-menu-ax.txt',
            sha256: '377e1cbbef439e3643e593edadd3f81f477d9b4234718a1cc6a14543d6d2a49e',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '32-collection-create-menu.jpg',
      },
      {
        id: 'closed',
        title: 'RECONSTRUCTION \u00b7 disclosure closed',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-collections-library',
    title: 'Duda Collections Empty Library',
    kind: 'collection',
    controls: ['New collection', 'Learn about collections'],
    evidence: [
      {
        screenshot: '31-collections-empty.jpg',
        sha256: 'd97a6d246fb78b7f8bbfabcb6ea4ca55a2574c6b7c81a2eeeab9417036b63f00',
        snapshots: [
          {
            path: '31-collections-empty-dom.txt',
            sha256: '8ceab1451b05e8571fc5ba75f59bec8b710aae5cf36851d63950805449b361b7',
          },
          {
            path: '31-collections-empty-ax.txt',
            sha256: '5ccac106fe35e697529c283025f3640ee519a7ff2db823d1e408dc26eb977a70',
          },
        ],
      },
      {
        screenshot: '73-collection-reload-persistence.jpg',
        sha256: 'd33d32c5784162b87b8bbd700292ed8d31d0368b9c10483e1119df9927510d56',
        snapshots: [
          {
            path: '73-collection-reload-persistence-dom.txt',
            sha256: '447da0186ee96e1eae9dd46dabc7d8d72534425ac08fb5ee7f0bf7463bc40d3b',
          },
          {
            path: '73-collection-reload-persistence-ax.txt',
            sha256: 'b74abc02c8c90c3a8e6ad1d9af486ca11fafb15a605d81a23e32d0967fe4bd0d',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '31-collections-empty.jpg',
      },
      {
        id: 'empty',
        title: 'RECONSTRUCTION \u00b7 empty/filter state',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'populated',
        title: 'RECONSTRUCTION \u00b7 fictional populated data',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'row-open',
        title: 'OBSERVED structure \u00b7 row detail',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '70-collection-row-editor.jpg',
      },
      {
        id: 'field-error',
        title: 'OBSERVED failure \u00b7 HTTP 400, local simulation',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '67-collection-empty-field-validation.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-contact-form-content',
    title: 'Duda Contact Form Content Tabs',
    kind: 'form',
    controls: [
      'Form Items',
      'Submission',
      'Integrations',
      'Name',
      'Phone',
      'Select Service',
      'Add field',
    ],
    evidence: [
      {
        screenshot: '56-form-content.jpg',
        sha256: '2c06a3a4d5d9d955526d3ca7541f4221d175ce4e6edccae059124ccf0c22d9e8',
        snapshots: [
          {
            path: '56-form-content-dom.txt',
            sha256: 'b9d6e4566e8bd0bcc2ce474a8df3694ccb81b34a84b499ae30da57238ecac52b',
          },
          {
            path: '56-form-content-ax.txt',
            sha256: 'c2da1e42be7e417d5651e5576a660983cef16b311d99a4e7c796f907767a7a64',
          },
        ],
      },
      {
        screenshot: '80-form-name-field-rules.jpg',
        sha256: '2fb3f62ac135fbbbbc30139ee05df8d72c430f603397594c9810a028c1841cb1',
        snapshots: [
          {
            path: '80-form-name-field-rules-dom.txt',
            sha256: '3ccce5a674e2a7771dc55c7e1d656a8332a980a32aa86104675a766d11fe8005',
          },
          {
            path: '80-form-name-field-rules-ax.txt',
            sha256: '6f5c7cae17e6850dd01e550cab6e8ef0b55c05bce1933525aa888e33e3ac296f',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '56-form-content.jpg',
      },
      {
        id: 'validation',
        title: 'RECONSTRUCTION \u00b7 local required validation',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-contact-form-design',
    title: 'Duda Contact Form Design Inspector',
    kind: 'design',
    controls: [
      'Layout',
      'Fields',
      'Button',
      'Form Title',
      'Submission Message',
      'Style',
      'Alignment',
      'Spacing',
      'Size',
      'Animation',
      'Position',
    ],
    evidence: [
      {
        screenshot: '55-form-design-inspector.jpg',
        sha256: '0a32f852ae614d685b6b3a1f9e2ce30def8518445c43c674a11ed2e3ab6175e4',
        snapshots: [
          {
            path: '55-form-design-inspector-dom.txt',
            sha256: '6890391b8a7bf127c5692ab6e5109edfa4466a88fcfb3d30b70b31fd9002b3b6',
          },
          {
            path: '55-form-design-inspector-ax.txt',
            sha256: '19b2564b10a6eef258ae0a1c9f58f41c6840387323863d60b62d9946869a6ba4',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '55-form-design-inspector.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-content-collection-form',
    title: 'Duda Content Collection Form Preview',
    kind: 'form',
    controls: ['Business or brand name', 'Business description', 'Next'],
    evidence: [
      {
        screenshot: '17-content-form.jpg',
        sha256: '79e73b7a997f9627c5079d5945b84dc5dde6428e61de49dfcbd410bb6324f7e4',
        snapshots: [
          {
            path: '17-content-form-dom.txt',
            sha256: 'a0b7b4fefe082829586dafe89d3d522f93004dbd4debd7c269740d8c445c91bd',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '17-content-form.jpg',
      },
      {
        id: 'validation',
        title: 'RECONSTRUCTION \u00b7 local required validation',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-creation-progress',
    title: 'Duda Site Creation Progress',
    kind: 'progress',
    controls: ['Creating your new project...'],
    evidence: [
      {
        screenshot: '22-site-creation-loading.jpg',
        sha256: '79944cf5c8a85f4fba5f9aeaad7aea784f91ee8565d2f923cf2739816c09aff6',
        snapshots: [
          {
            path: '22-site-creation-loading-ax.txt',
            sha256: '263a65ee7659297180a792ddf6755afbdda9d1fcdc3990073a64fe60a9b75ecb',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '22-site-creation-loading.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-custom-assets-menu',
    title: 'Duda Reusable Asset Navigation',
    kind: 'menu',
    controls: ['Custom Templates', 'Custom Sections', 'Widget Builder', 'Content Collection Form'],
    evidence: [
      {
        screenshot: '03-assets-menu.jpg',
        sha256: '554a6f97ab5d0feebb6518a786382ec55d871e91a5336057ed469b3091551bc4',
        snapshots: [
          {
            path: '03-assets-menu-ax.txt',
            sha256: 'f5d68d83fd04144b45e87d672b1a1ffc9a68ec698c58a388553169665a7f4020',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '03-assets-menu.jpg',
      },
      {
        id: 'closed',
        title: 'RECONSTRUCTION \u00b7 disclosure closed',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-custom-sections-empty',
    title: 'Duda Custom Section Library Empty State',
    kind: 'empty',
    controls: ['Create Section'],
    evidence: [
      {
        screenshot: '18-custom-sections-empty.jpg',
        sha256: '87e9d7dc5f9618ef26508a62509448b8aef067cb7298dd87fbadff634f5f3799',
        snapshots: [
          {
            path: '18-custom-sections-empty-ax.txt',
            sha256: '5c752f53c833202c6693a087b4b92faddd330720315d137d3daf88dc1d772228',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '18-custom-sections-empty.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-default-role-dialog',
    title: 'Duda Read Only Default Role Dialog',
    kind: 'role',
    controls: ['Editor', 'Site publish', 'Blog', 'AI Assistant', 'Copilot', 'Duplicate Role'],
    evidence: [
      {
        screenshot: '15-default-role.jpg',
        sha256: '388b2ffe44e4839c29d100911489c79c993efe32fb511cd6c39b218ca06addaa',
        snapshots: [
          {
            path: '15-default-role-ax.txt',
            sha256: '5fdf84b5c64a992fe295d226e1dd02c9576b4b76bcf32d5389b8a3d8e3e0a7f2',
          },
        ],
      },
      {
        screenshot: '16-role-search.jpg',
        sha256: 'f6e3eeded6f81613059cef3fa80c5fcf6daf88ff330bb19e8a5a1a4229f6aa52',
        snapshots: [
          {
            path: '16-role-search-ax.txt',
            sha256: 'e5c133334fc1498928c86e063e7369e1d4bff7d809d24dc75c45f1167bcd8347',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '15-default-role.jpg',
      },
      {
        id: 'empty',
        title: 'RECONSTRUCTION \u00b7 empty/filter state',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-editor-discover-checklist',
    title: 'Duda Editor Discover Checklist',
    kind: 'checklist',
    controls: [
      'Set up business info',
      'Discover how AI can help',
      'Get a quick SEO audit',
      'Add a data collection',
    ],
    evidence: [
      {
        screenshot: '23-editor-shell.jpg',
        sha256: '4f16ba5eeddb0c31e916b1c13dbc7c4c99a003cb376e0bbd5a96cd433dc2651f',
        snapshots: [
          {
            path: '23-editor-shell-dom.txt',
            sha256: '8afe5baed4a152bede2ab985888e6d09042f0ab3d72869b14edd3026754bef04',
          },
          {
            path: '23-editor-shell-ax.txt',
            sha256: 'b74abc02c8c90c3a8e6ad1d9af486ca11fafb15a605d81a23e32d0967fe4bd0d',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '23-editor-shell.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-editor-more-menu',
    title: 'Duda Editor More Menu',
    kind: 'menu',
    controls: [
      'Store',
      'Marketing Automation BETA',
      'Bookings',
      'Personalization',
      'App Store',
      'Settings',
      'Project Dashboard',
      'Discover',
    ],
    evidence: [
      {
        screenshot: '39-editor-more.jpg',
        sha256: '2962f2f14ccc7b35078e9da3a4b07e00fd2c1964306c19cbdc624a36800b94d6',
        snapshots: [
          {
            path: '39-editor-more-dom.txt',
            sha256: '6f08b51e74262f180e16a905c07b77d1eddede1060e63659989803eda84145e5',
          },
          {
            path: '39-editor-more-ax.txt',
            sha256: 'b74abc02c8c90c3a8e6ad1d9af486ca11fafb15a605d81a23e32d0967fe4bd0d',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '39-editor-more.jpg',
      },
      {
        id: 'closed',
        title: 'RECONSTRUCTION \u00b7 disclosure closed',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-editor-pages-tree',
    title: 'Duda Editor Pages and Anchors Tree',
    kind: 'pages',
    controls: [
      'Home',
      'About',
      'Services',
      'Project',
      'News & Blog',
      'Contact',
      'Maple Research Notes',
    ],
    evidence: [
      {
        screenshot: '24-pages-panel.jpg',
        sha256: '6133fe7a5d989b2231f76013166e9695ab77a221d40053ecf98fb527fc79c13c',
        snapshots: [
          {
            path: '24-pages-panel-dom.txt',
            sha256: 'ef14a5201b74421322c6821bce48223fdd08dcd30d8a9cc3b0cbda4878371d35',
          },
          {
            path: '24-pages-panel-ax.txt',
            sha256: '2454589adbba4e630109490df4008fc7cda252fbb49f1458d560129d42206fc2',
          },
        ],
      },
      {
        screenshot: '83-page-reload-persistence.jpg',
        sha256: '364d645258d40614b8933be990d0523077406b337d95188f70242229f9975dcf',
        snapshots: [
          {
            path: '83-page-reload-persistence-dom.txt',
            sha256: 'db62c17148c82d1531ee8ce8649888cb995511b16d4916d05190b369088c00a1',
          },
          {
            path: '83-page-reload-persistence-ax.txt',
            sha256: 'd7ae08b3feace307d31042bd7d3205db6acab39bbf7541dca19de66578ba596f',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '24-pages-panel.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-editor-shell',
    title: 'Duda Editor Application Shell',
    kind: 'editor',
    controls: ['Add', 'Pages', 'Layers', 'Theme', 'CMS', 'AEO/SEO', 'Blog', 'More'],
    evidence: [
      {
        screenshot: '23-editor-shell.jpg',
        sha256: '4f16ba5eeddb0c31e916b1c13dbc7c4c99a003cb376e0bbd5a96cd433dc2651f',
        snapshots: [
          {
            path: '23-editor-shell-dom.txt',
            sha256: '8afe5baed4a152bede2ab985888e6d09042f0ab3d72869b14edd3026754bef04',
          },
          {
            path: '23-editor-shell-ax.txt',
            sha256: 'b74abc02c8c90c3a8e6ad1d9af486ca11fafb15a605d81a23e32d0967fe4bd0d',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '23-editor-shell.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-favorites-empty',
    title: 'Duda Favorites Empty State',
    kind: 'empty',
    controls: ['View all Templates'],
    evidence: [
      {
        screenshot: '09-favorites-empty.jpg',
        sha256: '6b9c1d4ae4951eba8531a964d76a83ac79ab29b8aa18419fd4e1b697d986dde1',
        snapshots: [
          {
            path: '09-favorites-empty-ax.txt',
            sha256: 'da78ea004362e631b3b1fc7eb960bfd38c3e1727fbf525062573780cb8aa1d69',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '09-favorites-empty.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-form-integration-options',
    title: 'Duda Form Integration Options',
    kind: 'integrations',
    controls: [
      'Google Sheets',
      'Webhooks',
      'Zapier',
      'HubSpot',
      'MailChimp',
      'ActiveCampaign',
      'Albato',
    ],
    evidence: [
      {
        screenshot: '58-form-integrations.jpg',
        sha256: '64212bc0595bb10eb4b83847a541ea6a9c158dd07dae3c60ccdb988efe169235',
        snapshots: [
          {
            path: '58-form-integrations-dom.txt',
            sha256: '6b850c5f2746a1c198ce2655d4dcdfb6faa56631ee4f2dea3b22f6f0e04e2242',
          },
          {
            path: '58-form-integrations-ax.txt',
            sha256: 'f87c36a17b2484892cc5e70fbd0300facf195dc9b68a0154c5254223b206576e',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '58-form-integrations.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-form-response-empty',
    title: 'Duda Form Response Search Empty State',
    kind: 'table',
    controls: ['Search responses'],
    evidence: [
      {
        screenshot: '42-form-responses.jpg',
        sha256: '93be6bc8b60dcb6201a0fa5e2fc1f650b01b2e69296717397a71e29cefc9dcdd',
        snapshots: [
          {
            path: '42-form-responses-dom.txt',
            sha256: '8263d4e08185e68034dbe3f6944b47a79d46f4644672e382b0a6f69336696e37',
          },
          {
            path: '42-form-responses-ax.txt',
            sha256: '6c6be16e3eb61bd2d774f27d8ca417637df10b7c49b0d100ba0d4d40b75ccce8',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '42-form-responses.jpg',
      },
      {
        id: 'empty',
        title: 'RECONSTRUCTION \u00b7 empty/filter state',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'populated',
        title: 'RECONSTRUCTION \u00b7 fictional populated data',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-form-submission-configuration',
    title: 'Duda Form Submission Configuration',
    kind: 'submission',
    controls: ['New submission notification', 'Actions after submission', 'Tracking'],
    evidence: [
      {
        screenshot: '81-form-after-submission.jpg',
        sha256: '31353834dc5f393e3dd12c59c9c95791cccf90c2281e1269f91ce224b53c3e9e',
        snapshots: [
          {
            path: '81-form-after-submission-dom.txt',
            sha256: 'e3a1ad3c3ac11b5cfcf39e2af887f452341ebcc043c05cc84a445e9ea44b2524',
          },
          {
            path: '81-form-after-submission-ax.txt',
            sha256: '6f5c7cae17e6850dd01e550cab6e8ef0b55c05bce1933525aa888e33e3ac296f',
          },
        ],
      },
      {
        screenshot: '82-form-tracking.jpg',
        sha256: '0b01bf9f245d0f81e39412da62fdedb5cc3bebda16bd46024956ac9a70ac04b1',
        snapshots: [
          {
            path: '82-form-tracking-dom.txt',
            sha256: '42d7293a1d55c202218a65d64e22630395af88af083d3a653dfb4205e2fe61e3',
          },
          {
            path: '82-form-tracking-ax.txt',
            sha256: '6f5c7cae17e6850dd01e550cab6e8ef0b55c05bce1933525aa888e33e3ac296f',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '81-form-after-submission.jpg',
      },
      {
        id: 'tracking',
        title: 'OBSERVED structure \u00b7 Tracking',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '82-form-tracking.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-internal-collection-editor',
    title: 'Duda Internal Collection Schema Editor',
    kind: 'collection',
    controls: ['New collection', 'Add Row', 'Reorder Columns', 'Add New Field'],
    evidence: [
      {
        screenshot: '65-internal-collection-created.jpg',
        sha256: 'b9d3865544d5308e1be8250a5a649c5501566d294c41c63eb6ebda007d0ddc1a',
        snapshots: [
          {
            path: '65-internal-collection-created-dom.txt',
            sha256: '00131116f5c6d56866598e46d70e966f716089dd4adadae011edde58ff4500bf',
          },
          {
            path: '65-internal-collection-created-ax.txt',
            sha256: '456a066676bc6ec3eac816fe98e7f47d4944dc1a4e8350bbfeae5574c563bac5',
          },
        ],
      },
      {
        screenshot: '66-collection-renamed-added-field.jpg',
        sha256: '3f0035718d1ea33f3bdc848d9e6412021cd9d3f2a828b5b7b906ea8a51cb508f',
        snapshots: [
          {
            path: '66-collection-renamed-added-field-dom.txt',
            sha256: '6854c48a8c8cdbd939557865bb69cbca3ec84e60b2daa7ce4747a915b5b7372f',
          },
          {
            path: '66-collection-renamed-added-field-ax.txt',
            sha256: 'a31123ec0dd8672b0825911bb69c429fb60c358b94b4218318c377b87a19cf84',
          },
        ],
      },
      {
        screenshot: '68-collection-field-types.jpg',
        sha256: '7ea531032f7bd6eea1229c33aeea29b01104ea47d0fd069fbfc3824985163cd4',
        snapshots: [
          {
            path: '68-collection-field-types-dom.txt',
            sha256: '0c9e4aa67929743bd78684632d130a075892e597d912506fa573020c7f535d0e',
          },
          {
            path: '68-collection-field-types-ax.txt',
            sha256: '2b058955ec1c0bf132ba705eedb993b1a99b321c46af2344ed9e45ff118555bc',
          },
        ],
      },
      {
        screenshot: '69-collection-second-row.jpg',
        sha256: 'e671ca44a1aeabe830ba3754ca6280004f0fe1af8040ac545bfd1713704978f7',
        snapshots: [
          {
            path: '69-collection-second-row-dom.txt',
            sha256: '3d1bbe47b247b91ffb59266fbfc410c1803001b2c514e302107c5c5d85c3d79b',
          },
          {
            path: '69-collection-second-row-ax.txt',
            sha256: '68142f4335d828429af0f4bcdfe9e52b9b368e8b17adcb69bb38eeebabb99be2',
          },
        ],
      },
      {
        screenshot: '73-collection-reload-persistence.jpg',
        sha256: 'd33d32c5784162b87b8bbd700292ed8d31d0368b9c10483e1119df9927510d56',
        snapshots: [
          {
            path: '73-collection-reload-persistence-dom.txt',
            sha256: '447da0186ee96e1eae9dd46dabc7d8d72534425ac08fb5ee7f0bf7463bc40d3b',
          },
          {
            path: '73-collection-reload-persistence-ax.txt',
            sha256: 'b74abc02c8c90c3a8e6ad1d9af486ca11fafb15a605d81a23e32d0967fe4bd0d',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '65-internal-collection-created.jpg',
      },
      {
        id: 'empty',
        title: 'RECONSTRUCTION \u00b7 empty/filter state',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'populated',
        title: 'RECONSTRUCTION \u00b7 fictional populated data',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'row-open',
        title: 'OBSERVED structure \u00b7 row detail',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '70-collection-row-editor.jpg',
      },
      {
        id: 'field-error',
        title: 'OBSERVED failure \u00b7 HTTP 400, local simulation',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '67-collection-empty-field-validation.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-navigation-disclosures',
    title: 'Duda Descriptive Navigation Disclosures',
    kind: 'menu',
    controls: ['Client Management', 'Client Billing', 'Team Management'],
    evidence: [
      {
        screenshot: '02-clients-menu.jpg',
        sha256: '90560d31002b232a8046cfb62b190af20522c192326017195adfe010be68f879',
        snapshots: [
          {
            path: '02-clients-menu-ax.txt',
            sha256: 'f5d68d83fd04144b45e87d672b1a1ffc9a68ec698c58a388553169665a7f4020',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '02-clients-menu.jpg',
      },
      {
        id: 'closed',
        title: 'RECONSTRUCTION \u00b7 disclosure closed',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-page-seo-metadata-table',
    title: 'Duda Page SEO Metadata Table',
    kind: 'seo',
    controls: [
      'Missing Meta Tags',
      'All Pages',
      'Needs Attention (0)',
      'Indexed only',
      'Generate Meta Tags',
    ],
    evidence: [
      {
        screenshot: '36-page-seo-loaded.jpg',
        sha256: '3809786ca69518bfa6a073036ffea5adc2e3bf010d2cb1ac404eeb635168676d',
        snapshots: [
          {
            path: '36-page-seo-loaded-dom.txt',
            sha256: '599782df95ae5ec970188fa57860fc7c25a3888a8f01ee3c8c232ce8008aad39',
          },
          {
            path: '36-page-seo-loaded-ax.txt',
            sha256: 'e2bca65622a97a3a48d2636e7f77c82b3aa8dc17575688959a8807372014497f',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '36-page-seo-loaded.jpg',
      },
      {
        id: 'empty',
        title: 'RECONSTRUCTION \u00b7 empty/filter state',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-page-type-chooser',
    title: 'Duda Page Type Chooser',
    kind: 'menu',
    controls: [
      'Page Builder',
      'Blank Page',
      'Generate a page',
      'Designed Page',
      'Dynamic Page',
      'Navigation Folder',
      'Page URL',
    ],
    evidence: [
      {
        screenshot: '26-page-type-menu.jpg',
        sha256: '83cf81aa64b8d92eeef3effc538a0b81b40b04c0289260eb907f215bf5f7d8b9',
        snapshots: [
          {
            path: '26-page-type-menu-dom.txt',
            sha256: 'ab5e9b301f4ba351bd30773be5b78023c2b943e0fccd02e29f47f0b0ce55cbf2',
          },
          {
            path: '26-page-type-menu-ax.txt',
            sha256: '6b74b184a94996fccc036c516e8bb616ca62645f28cb1e33b0726365b4a3c42f',
          },
        ],
      },
      {
        screenshot: '74-blank-page-dialog.jpg',
        sha256: '5ce02c41c619eda0455556db7019b6a744685698490a80f17f6df4dc5216a595',
        snapshots: [
          {
            path: '74-blank-page-dialog-dom.txt',
            sha256: '49823681994972de5c60b4615a4735af9bf86a4e4de001844df9aa7a936c7783',
          },
          {
            path: '74-blank-page-dialog-ax.txt',
            sha256: 'fbd7b580a45ecfcd10850806f7844dd07cfd6898d970cd678ff7838e7bb71018',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '26-page-type-menu.jpg',
      },
      {
        id: 'closed',
        title: 'RECONSTRUCTION \u00b7 disclosure closed',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-performance-highlights',
    title: 'Duda Performance Highlights Dashboard',
    kind: 'analytics',
    controls: ['7 days', '14 days', '30 days', 'Custom'],
    evidence: [
      {
        screenshot: '33-seo-project-dashboard.jpg',
        sha256: 'accf398587d6f6be70494ce1b64bd6e5dd46fae7cdebd5e6bd674bd3d9748d62',
        snapshots: [
          {
            path: '33-seo-project-dashboard-dom.txt',
            sha256: '888577e748ece0317f778a742dd4b6dbcd6dfa087d48aee4ff74a0a55a95dcf6',
          },
          {
            path: '33-seo-project-dashboard-ax.txt',
            sha256: '271b6cd0ae3f339c1fc74ef59a335ce57a033eeb5a18a18869c010bde557b8da',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '33-seo-project-dashboard.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-populated-project-list',
    title: 'Duda Populated Project List',
    kind: 'table',
    controls: ['New Project', 'Filter', 'Labels'],
    evidence: [
      {
        screenshot: '59-project-list.jpg',
        sha256: '5a5d9433415f02572af022f547fcbf4bee6c184116499f6d3c19dcb3891ab028',
        snapshots: [
          {
            path: '59-project-list-dom.txt',
            sha256: 'cdffa44d9884cc5a980ed00cae6afaaccd13d332df22f8d3e7c1fbd56844f3dc',
          },
          {
            path: '59-project-list-ax.txt',
            sha256: '1263d935f6c6e44d62e90aebc54cf4a63e35449bdf05523ac380ce13647b633e',
          },
        ],
      },
      {
        screenshot: '62-project-search-empty.jpg',
        sha256: '403eabe8740d608593d94a7ea09a9bd3bdd2add6c523550c8f67309aae614461',
        snapshots: [
          {
            path: '62-project-search-empty-dom.txt',
            sha256: '4f1466dfee544f895304a912e8867a408b3e07b44f0f0c2b9a42d7ca037a4899',
          },
          {
            path: '62-project-search-empty-ax.txt',
            sha256: '7461b4760bc310e6b4cad8812decb72d2d40a253ca213497d612577883e14a33',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '59-project-list.jpg',
      },
      {
        id: 'empty',
        title: 'OBSERVED structure \u00b7 empty/filter state',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '62-project-search-empty.jpg',
      },
      {
        id: 'populated',
        title: 'RECONSTRUCTION \u00b7 fictional populated data',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-popup-library-empty',
    title: 'Duda Editor Popup Library',
    kind: 'empty',
    controls: ['New Popup'],
    evidence: [
      {
        screenshot: '25-popups-empty.jpg',
        sha256: '2cc1047fc5d6fcfa991ed205ec68572d809e4dfe550f3b39a0bd9d37d7638051',
        snapshots: [
          {
            path: '25-popups-empty-dom.txt',
            sha256: '7d415756ad8992d9c09e535c004d6cf18bca767cc1d5f160a7b1bf1d7c4ff1ab',
          },
          {
            path: '25-popups-empty-ax.txt',
            sha256: 'f867f78b3d077b3ec6e410d94b14ca30e5d6a32847adccb33b9a3d8341f8106d',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '25-popups-empty.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-project-action-menu',
    title: 'Duda Project Row Action Menu',
    kind: 'menu',
    controls: [
      'Rename Project',
      'Duplicate Site',
      'Save as Template',
      'Assign Label',
      'Reset Site',
      'Transfer Site',
      'Project Dashboard',
      'Delete Project',
    ],
    evidence: [
      {
        screenshot: '63-project-overflow.jpg',
        sha256: '38cede9291d6d96034d500863f1d8e07452874ba41c96c715302848f85d45a86',
        snapshots: [
          {
            path: '63-project-overflow-dom.txt',
            sha256: '14a7447353372cbbfede732b723a997df497bd60bf41192d537509d34b4714b0',
          },
          {
            path: '63-project-overflow-ax.txt',
            sha256: '2be8ccfaedee2d6c98d73960f86061ea98e1bf5c6c07f526d03492a36af78316',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '63-project-overflow.jpg',
      },
      {
        id: 'closed',
        title: 'RECONSTRUCTION \u00b7 disclosure closed',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-project-onboarding',
    title: 'Duda Project Onboarding Choices',
    kind: 'cards',
    controls: [
      'Build a site in the Duda editor',
      'Generate a site or web app with AI',
      'Embedded platform',
    ],
    evidence: [
      {
        screenshot: '01-dashboard.jpg',
        sha256: 'ee25c0887fa65b322a0769ccc0c9d0eeb58116261283a9365c268a150ecb8270',
        snapshots: [
          {
            path: '01-dashboard-ax.txt',
            sha256: 'f5d68d83fd04144b45e87d672b1a1ffc9a68ec698c58a388553169665a7f4020',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '01-dashboard.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-project-overview',
    title: 'Duda Project Overview Workspace',
    kind: 'overview',
    controls: [
      'Edit Project',
      'Preview',
      'Form Responses',
      'Clients',
      'Export to CSV',
      'Manage Responses',
    ],
    evidence: [
      {
        screenshot: '38-project-overview.jpg',
        sha256: '032f0ade9b7addd9cb81563949c82c6f0155efb03c1bc0d8ca5a03b98d91bd33',
        snapshots: [
          {
            path: '38-project-overview-dom.txt',
            sha256: '02be865698df22262e37e3fcf56bd41e8b8c83b0d99eadf43208cdddc61b479f',
          },
          {
            path: '38-project-overview-ax.txt',
            sha256: 'c63e6a97a500146f7103dcafd5eacf682e5a9d54b8f8c95b35ccf07b5381a5c2',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '38-project-overview.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-project-sort-filter',
    title: 'Duda Project Sort and Filter Menus',
    kind: 'sort',
    controls: [
      'Published',
      'Created',
      'Site name',
      'Newest',
      'Oldest',
      'Creation Date',
      'Last Publish Date',
      'Status',
      'Site Comments',
      'Labels',
    ],
    evidence: [
      {
        screenshot: '60-project-sort-menu.jpg',
        sha256: 'f9aef76563479a8bd41fc8c42001fb8f8376618602782fa5adf803eb03f1c3ca',
        snapshots: [
          {
            path: '60-project-sort-menu-dom.txt',
            sha256: 'eed1e8f709e41dd0cac89f565b5cd3c7e68bf1ec37d9755b20c71bf6218898ef',
          },
          {
            path: '60-project-sort-menu-ax.txt',
            sha256: '01b28c33ebfe5f3982788feee85c4718ba75e1ddb471b8d17a290a5abb41af5f',
          },
        ],
      },
      {
        screenshot: '61-project-filter-menu.jpg',
        sha256: '9f540c0c7fc6241f23c5184bb784c751395f7217d48ff89cfba982d32e5de519',
        snapshots: [
          {
            path: '61-project-filter-menu-dom.txt',
            sha256: 'c54e2810ed61d01037b1160ee0c5250e8fa61746b09c9db6c31992f217862af0',
          },
          {
            path: '61-project-filter-menu-ax.txt',
            sha256: 'b488644d1d6943860a46f8a9c2e38ec3c01b49a5315d638d8323e4173ac3f1bc',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '60-project-sort-menu.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-responsive-template-preview',
    title: 'Duda Responsive Template Preview',
    kind: 'device',
    controls: ['All devices', 'Desktop', 'Tablet', 'Mobile', 'Back', 'Start Building'],
    evidence: [
      {
        screenshot: '10-preview-all-devices.jpg',
        sha256: '3e9ad8758839815a9406d0af81b64ae03563b48eb411342da3ab1de91317d740',
        snapshots: [
          {
            path: '10-preview-dom.txt',
            sha256: '4194eb206d2be5281dfbf496d7e51e8b03ca1ce051526e228759f6100e7c8f7a',
          },
        ],
      },
      {
        screenshot: '11-preview-mobile.jpg',
        sha256: '4b5f5ca0331c640460a4ff3d2e4ed0d3e4783eac3303b21fbd8f2b4b7b94ae8b',
        snapshots: [
          {
            path: '11-preview-mobile-ax.txt',
            sha256: '5d691b5e78c4000249541d5f8b776dc5fe064d0bdd9118789bf45d131fc1b181',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '10-preview-all-devices.jpg',
      },
      {
        id: 'mobile',
        title: 'OBSERVED structure \u00b7 mobile viewport',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '11-preview-mobile.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-seo-audit-groups',
    title: 'Duda Site Audit Priority Groups',
    kind: 'audit',
    controls: [
      'Accessibility',
      'On-page',
      'Authority',
      'Technical',
      'Visibility',
      'View Details',
      'Fix It',
      'Install App',
    ],
    evidence: [
      {
        screenshot: '35-site-audit.jpg',
        sha256: '2a0d52ba3c99dc73c04a58c53faefbc8bd531f708e729fe9c2fd390c467fd08f',
        snapshots: [
          {
            path: '35-site-audit-dom.txt',
            sha256: '9feac9e9fc14f80e69103d6b43a7aff0d21555df243e0b203d35e5abc52c327b',
          },
          {
            path: '35-site-audit-ax.txt',
            sha256: '30d388ca1a26b07ee1ef3d5488ba825309dff22c077b55a9f5755c2b561c1dc9',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '35-site-audit.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-seo-filter-empty',
    title: 'Duda SEO Filter Empty State',
    kind: 'seo',
    controls: ['Needs Attention (0)', 'All Pages'],
    evidence: [
      {
        screenshot: '37-seo-empty-filter.jpg',
        sha256: '4775855239d0c9f524fef90345345633cb9507b464585f62d2c8b81a2bdb5713',
        snapshots: [
          {
            path: '37-seo-empty-filter-dom.txt',
            sha256: '9c8f885d925923d30f5af4f0bb1084002a3301a7772de9450542dbdd7e58bb9d',
          },
          {
            path: '37-seo-empty-filter-ax.txt',
            sha256: '48a1ddbaf3372793566fd000b46d0de0f9bc739a9abf6383150c867e38760348',
          },
        ],
      },
      {
        screenshot: '36-page-seo-loaded.jpg',
        sha256: '3809786ca69518bfa6a073036ffea5adc2e3bf010d2cb1ac404eeb635168676d',
        snapshots: [
          {
            path: '36-page-seo-loaded-dom.txt',
            sha256: '599782df95ae5ec970188fa57860fc7c25a3888a8f01ee3c8c232ce8008aad39',
          },
          {
            path: '36-page-seo-loaded-ax.txt',
            sha256: 'e2bca65622a97a3a48d2636e7f77c82b3aa8dc17575688959a8807372014497f',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '37-seo-empty-filter.jpg',
      },
      {
        id: 'empty',
        title: 'OBSERVED structure \u00b7 empty/filter state',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '37-seo-empty-filter.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-site-backup-manager',
    title: 'Duda Site Backup Manager',
    kind: 'backup',
    controls: ['New Version Name', 'Save'],
    evidence: [
      {
        screenshot: '41-site-backup.jpg',
        sha256: '2a6f7a643e90c5868dbed6ce075f3fc9c2f0d60b19024fd7a1fd2b6859995cc3',
        snapshots: [
          {
            path: '41-site-backup-dom.txt',
            sha256: '98957124acec5c0ac50e3858f7cdcf950aca516f69a17b0414decf0142261cba',
          },
          {
            path: '41-site-backup-ax.txt',
            sha256: 'b74abc02c8c90c3a8e6ad1d9af486ca11fafb15a605d81a23e32d0967fe4bd0d',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '41-site-backup.jpg',
      },
      {
        id: 'validation',
        title: 'RECONSTRUCTION \u00b7 local required validation',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-site-comments-panel',
    title: 'Duda Site Comments Panel',
    kind: 'comments',
    controls: ['Site Comments', 'Team & Clients', 'Keep comments visible'],
    evidence: [
      {
        screenshot: '50-comments-panel.jpg',
        sha256: '5f5be9ddae43d08f17ddeeceb7c9c3a905a8c2497669c36da7912cd550c049d7',
        snapshots: [
          {
            path: '50-comments-panel-dom.txt',
            sha256: '5c9e08d4cb269679b70dfa625f9ce88026a22bfd3ff95befd3b3583e643dc7f1',
          },
          {
            path: '50-comments-panel-ax.txt',
            sha256: 'f28c18bf0cea8139be6b1fb19c8181ba0f2fdcf2cfee22f2c492c9323e16010a',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '50-comments-panel.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-site-creation-dialog',
    title: 'Duda Site Creation Dialog',
    kind: 'dialog',
    controls: ['Site Name', 'Start Building'],
    evidence: [
      {
        screenshot: '21-site-creation-dialog.jpg',
        sha256: 'c83d3705dd2a89dbac14798d5fb175d85bd9ed78133e472ae8a8b3d61dbca12c',
        snapshots: [
          {
            path: '21-site-creation-dialog-ax.txt',
            sha256: 'e88282ce973e6a900efe7874897ea299cbd81e5036f5b12a139c9df8cbe65308',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '21-site-creation-dialog.jpg',
      },
      {
        id: 'validation',
        title: 'RECONSTRUCTION \u00b7 local required validation',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-site-responsive-preview',
    title: 'Duda Site Responsive Preview Toolbar',
    kind: 'device',
    controls: ['Desktop', 'Tablet', 'Mobile', 'All devices', 'Publish', 'Close'],
    evidence: [
      {
        screenshot: '43-site-preview-desktop.jpg',
        sha256: '1500920e3ec0922d6e2950d9b3d8dec0b3b539705c887ff6c879718a5e5057df',
        snapshots: [
          {
            path: '43-site-preview-desktop-dom.txt',
            sha256: 'f3c4a0220abf608b420d7340fd7f2f2e6fb7b2d2f8cd1faf35fd454d881769d5',
          },
          {
            path: '43-site-preview-desktop-ax.txt',
            sha256: '5068649fee099b74d2df183d9a489502555901613274d8c92553290696f9cc10',
          },
        ],
      },
      {
        screenshot: '44-site-preview-mobile.jpg',
        sha256: 'c894cdfbc559904a15ab642980b5bd327338731ecc1a8b4d523f26cee31a44c4',
        snapshots: [
          {
            path: '44-site-preview-mobile-dom.txt',
            sha256: '7985cde55a2515f0baae9060bc34510b404ac2146ad719d897550f4124d5eb8a',
          },
          {
            path: '44-site-preview-mobile-ax.txt',
            sha256: '3ea5e7b4c06d8e17f48cbaf287deac5b01972565a1e511337ac82a788397bac0',
          },
        ],
      },
      {
        screenshot: '45-site-preview-tablet.jpg',
        sha256: 'bd4211406adb3d8d97109cd466e1b54ddae9e82d45ba25d643dc11bc1b772e95',
        snapshots: [
          {
            path: '45-site-preview-tablet-dom.txt',
            sha256: '0baff5fd692723f04c7234840aa3dd6ee83d64625122bf8408a6f8969d58ee60',
          },
          {
            path: '45-site-preview-tablet-ax.txt',
            sha256: '3ea5e7b4c06d8e17f48cbaf287deac5b01972565a1e511337ac82a788397bac0',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '43-site-preview-desktop.jpg',
      },
      {
        id: 'mobile',
        title: 'OBSERVED structure \u00b7 mobile viewport',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '44-site-preview-mobile.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-site-settings-navigation',
    title: 'Duda Site Settings Navigation',
    kind: 'nav',
    controls: [
      'Favicon & Social Image',
      'Site Domain',
      'SSL',
      'Google Tools',
      'URL Redirect',
      'Head HTML',
      'Site Backup',
      'Site Languages',
      'Privacy Settings',
      'Form Responses',
      '404 Page',
      'Site Export',
      'PWA',
      'Reset Site',
    ],
    evidence: [
      {
        screenshot: '40-site-settings.jpg',
        sha256: '7e3bfd6347967087446805d41c4fd40bd3698a6187c17729cea2c1f92556f56e',
        snapshots: [
          {
            path: '40-site-settings-dom.txt',
            sha256: 'a1b39671d7cd7246bc1612b426e7bd5fe26b47786e70b09fcb6d2e48f7d5bd8a',
          },
          {
            path: '40-site-settings-ax.txt',
            sha256: 'b74abc02c8c90c3a8e6ad1d9af486ca11fafb15a605d81a23e32d0967fe4bd0d',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '40-site-settings.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-site-theme-tokens',
    title: 'Duda Site Theme Tokens',
    kind: 'theme',
    controls: ['Colors', 'Buttons', 'Text', 'Width & Spacing', 'Images', 'Backgrounds'],
    evidence: [
      {
        screenshot: '29-site-theme.jpg',
        sha256: '08704a6f6cf09936fc83d77d83697f631dd107376730c8d3e3f2b5fc41754b04',
        snapshots: [
          {
            path: '29-site-theme-dom.txt',
            sha256: '63a4ba26300c6ae072474a1145d586575a418424ce982db023fc5b7c6889c43d',
          },
          {
            path: '29-site-theme-ax.txt',
            sha256: 'd25ebdcef593a46622c2b49c070a67d1e15f3156f9eb48aec62d79743f828c29',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '29-site-theme.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-team-role-tabs',
    title: 'Duda Team Management and Roles Tabs',
    kind: 'roles',
    controls: ['Team members', 'Roles & permissions', 'Invite Member', 'Create Custom Role'],
    evidence: [
      {
        screenshot: '13-team-empty.jpg',
        sha256: '928acbdf1ac536531b87d3f56b833f951e22df5eeebbd302f4089ab9e91b589f',
        snapshots: [
          {
            path: '13-team-empty-ax.txt',
            sha256: '5cfa69d6cf873259a09f74a65ccae7bdcb7979ee8c51d92ed5ede0f9ebd42d32',
          },
        ],
      },
      {
        screenshot: '14-roles-list.jpg',
        sha256: '817e2eaa2de0489979d7a167e3bee7f3a1ecae6316fd594beac91ace267a4ac0',
        snapshots: [
          {
            path: '14-roles-list-ax.txt',
            sha256: 'c6b20f43e6081e2833d1787826086f12d51f8f10ab5ff0e4176d201140552ad3',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '13-team-empty.jpg',
      },
      {
        id: 'empty',
        title: 'RECONSTRUCTION \u00b7 empty/filter state',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'populated',
        title: 'RECONSTRUCTION \u00b7 fictional populated data',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-template-card',
    title: 'Duda Template Preview and Build Card',
    kind: 'card',
    controls: ['Preview', 'Start Building'],
    evidence: [
      {
        screenshot: '06-templates.jpg',
        sha256: 'dbca45c55b6313eec4cb3818f7ee030f0434b192d8cec23a03b07049b0a46cf0',
        snapshots: [
          {
            path: '06-templates-ax.txt',
            sha256: '5d691b5e78c4000249541d5f8b776dc5fe064d0bdd9118789bf45d131fc1b181',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '06-templates.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-template-category-filter',
    title: 'Duda Template Category Filter',
    kind: 'category',
    controls: [
      'All Templates',
      'Blank',
      'Blog',
      'Bookings',
      'Business',
      'Community & Education',
      'Events',
      'Landing Page',
      'Lifestyle & Health',
      'Portfolio & Resume',
      'Professional Services',
      'Restaurant & Food',
      'Store',
      'Travel',
    ],
    evidence: [
      {
        screenshot: '07-template-categories.jpg',
        sha256: 'a88890c3711b027e937f184b858b73e04172db154e581558ddccac6ff46e820e',
        snapshots: [
          {
            path: '07-template-categories-ax.txt',
            sha256: '4493b793ee4ecd7a79862ea1c6bed2f302036d9b7578a7f3af5ec647d7b2826f',
          },
        ],
      },
      {
        screenshot: '08-blog-filter.jpg',
        sha256: '3558a3127b5c369cc0c3bd00c6f932ee5aa45cf310eb8301484be3151c8a3f7c',
        snapshots: [
          {
            path: '08-blog-filter-ax.txt',
            sha256: '5d691b5e78c4000249541d5f8b776dc5fe064d0bdd9118789bf45d131fc1b181',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '07-template-categories.jpg',
      },
      {
        id: 'closed',
        title: 'RECONSTRUCTION \u00b7 disclosure closed',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-template-gallery',
    title: 'Duda Template Gallery Workspace',
    kind: 'gallery',
    controls: ['All Templates', 'Favorites', 'Custom', 'Recent', 'AI-Ready', 'Recommended'],
    evidence: [
      {
        screenshot: '06-templates.jpg',
        sha256: 'dbca45c55b6313eec4cb3818f7ee030f0434b192d8cec23a03b07049b0a46cf0',
        snapshots: [
          {
            path: '06-templates-ax.txt',
            sha256: '5d691b5e78c4000249541d5f8b776dc5fe064d0bdd9118789bf45d131fc1b181',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '06-templates.jpg',
      },
      {
        id: 'empty',
        title: 'RECONSTRUCTION \u00b7 empty/filter state',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-trial-banner',
    title: 'Duda Trial Countdown Banner',
    kind: 'banner',
    controls: ['Choose a Plan'],
    evidence: [
      {
        screenshot: '01-dashboard.jpg',
        sha256: 'ee25c0887fa65b322a0769ccc0c9d0eeb58116261283a9365c268a150ecb8270',
        snapshots: [
          {
            path: '01-dashboard-ax.txt',
            sha256: 'f5d68d83fd04144b45e87d672b1a1ffc9a68ec698c58a388553169665a7f4020',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '01-dashboard.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-white-label-menu',
    title: 'Duda White Label Navigation',
    kind: 'menu',
    controls: ['Custom Domain', 'Custom Branding', 'Workspace Customization', 'Client Invitation'],
    evidence: [
      {
        screenshot: '04-whitelabel-menu.jpg',
        sha256: '2a1fabf33731f756c9f7eb796a93e753a7f77253994f5ca0298a76769bbbf4a6',
        snapshots: [
          {
            path: '04-whitelabel-menu-ax.txt',
            sha256: 'f5d68d83fd04144b45e87d672b1a1ffc9a68ec698c58a388553169665a7f4020',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '04-whitelabel-menu.jpg',
      },
      {
        id: 'closed',
        title: 'RECONSTRUCTION \u00b7 disclosure closed',
        provenance: 'RECONSTRUCTION',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-widget-insertion-library',
    title: 'Duda Widget Insertion Library',
    kind: 'widgets',
    controls: [
      'Layout',
      'Basic',
      'Form',
      'Visuals & Audio',
      'Business',
      'Social',
      'Blog',
      'Other',
      'Custom',
    ],
    evidence: [
      {
        screenshot: '27-widget-library.jpg',
        sha256: '85f986a37c3e07dd1e97dde118edf48f090752c89070389720672fa0daa14e4c',
        snapshots: [
          {
            path: '27-widget-library-dom.txt',
            sha256: '3222df8cba37eeb95a7027eefd35999605f16204705175aa86b41ec38707d8e6',
          },
          {
            path: '27-widget-library-ax.txt',
            sha256: '646cea8c87e1fd434e65e3b3e77be9db589f5d05d10cfe9904a2da14d875e3a5',
          },
        ],
      },
      {
        screenshot: '28-widget-search-empty.jpg',
        sha256: '010d5bc3131c1462d203ea197dee20922ecebeabc76d5b1e4a6279013513d836',
        snapshots: [
          {
            path: '28-widget-search-empty-dom.txt',
            sha256: 'a7fb49c72f20967728d4b7ee116c73ca7cece8e75eab5ba075a67b7153ef88be',
          },
          {
            path: '28-widget-search-empty-ax.txt',
            sha256: '3568e77ed34c52abc2e2b2fe750597d7e2f0e6106f67744c975bb78d2aedd7b8',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '27-widget-library.jpg',
      },
      {
        id: 'empty',
        title: 'OBSERVED structure \u00b7 empty/filter state',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '28-widget-search-empty.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-widget-search-empty',
    title: 'Duda Widget Search Empty State',
    kind: 'widgets',
    controls: [
      'Layout',
      'Basic',
      'Form',
      'Visuals & Audio',
      'Business',
      'Social',
      'Blog',
      'Other',
      'Custom',
    ],
    evidence: [
      {
        screenshot: '28-widget-search-empty.jpg',
        sha256: '010d5bc3131c1462d203ea197dee20922ecebeabc76d5b1e4a6279013513d836',
        snapshots: [
          {
            path: '28-widget-search-empty-dom.txt',
            sha256: 'a7fb49c72f20967728d4b7ee116c73ca7cece8e75eab5ba075a67b7153ef88be',
          },
          {
            path: '28-widget-search-empty-ax.txt',
            sha256: '3568e77ed34c52abc2e2b2fe750597d7e2f0e6106f67744c975bb78d2aedd7b8',
          },
        ],
      },
      {
        screenshot: '27-widget-library.jpg',
        sha256: '85f986a37c3e07dd1e97dde118edf48f090752c89070389720672fa0daa14e4c',
        snapshots: [
          {
            path: '27-widget-library-dom.txt',
            sha256: '3222df8cba37eeb95a7027eefd35999605f16204705175aa86b41ec38707d8e6',
          },
          {
            path: '27-widget-library-ax.txt',
            sha256: '646cea8c87e1fd434e65e3b3e77be9db589f5d05d10cfe9904a2da14d875e3a5',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '28-widget-search-empty.jpg',
      },
      {
        id: 'empty',
        title: 'OBSERVED structure \u00b7 empty/filter state',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '28-widget-search-empty.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-workspace-customization',
    title: 'Duda Workspace Customization Controls',
    kind: 'workspace',
    controls: [
      'Account Toolbar Preview',
      'Editor Toolbar Preview',
      'Clients & Team',
      'Custom Assets',
      'White Label',
      'Business Tools',
      'English',
      'French',
      'Spanish',
      'Save All Changes',
    ],
    evidence: [
      {
        screenshot: '19-workspace-account.jpg',
        sha256: '1328a0cabd4ec3b4b4509c280e7841a3df1abd76012603312294f180da89bd7a',
        snapshots: [
          {
            path: '19-workspace-account-ax.txt',
            sha256: '8398e6aa86ce76ff1a55ca91ef2660123c4e280936386403566dd1eabbf5d245',
          },
        ],
      },
      {
        screenshot: '20-workspace-editor-preview.jpg',
        sha256: '86ce572bc9f732d5b18e7e13c528943c284a10dd2c1de59a94e2d767d7384661',
        snapshots: [
          {
            path: '20-workspace-editor-preview-ax.txt',
            sha256: '318a6b2e0acf3b16d092261c9d38d849649bf9add1254eb9f61c03838d4f0349',
          },
        ],
      },
    ],
    states: [
      {
        id: 'default',
        title: 'OBSERVED structure \u00b7 fictional content',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '19-workspace-account.jpg',
      },
      {
        id: 'editor',
        title: 'OBSERVED structure \u00b7 Editor Toolbar Preview',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '20-workspace-editor-preview.jpg',
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION \u00b7 disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
  {
    id: 'duda-dynamic-page-binding',
    title: 'Duda Dynamic Page and Widget Binding',
    kind: 'dynamic',
    controls: [
      'Blank Page',
      'Real Estate',
      'Team Member',
      'Single Service',
      'Next',
      'Page Name',
      'Connect to a collection',
      'Add Page',
      'Connect to Data',
      'Service label',
      'Connect',
      'Item',
    ],
    evidence: [
      {
        screenshot: '112-number-text-binding-options.jpg',
        sha256: '121c513aab7e85f0386383ff23e9b1d977e46824f00cbcdd00e3a769d7e6d4c2',
        snapshots: [
          {
            path: '112-number-text-binding-options-dom.txt',
            sha256: '851ec4944abcb926dbad2a8fca71fe181b064581376a91fdd45a3145fde12aca',
          },
          {
            path: '112-number-text-binding-options-ax.txt',
            sha256: '6dd869df9135d2981261f747490404b0198bc1c63b6777f5a904bc96cddbd3b7',
          },
        ],
      },
      {
        screenshot: '113-number-text-bound-empty.jpg',
        sha256: '88213a9ac67bb0d5c8a267889908e7e1d5f8cd6468f80bebeab00e112407ef3c',
        snapshots: [
          {
            path: '113-number-text-bound-empty-dom.txt',
            sha256: 'aa702621e0457d0d6d0fdf0d5a1c90067166397e6af78dc2fd5801c9e7e07356',
          },
          {
            path: '113-number-text-bound-empty-ax.txt',
            sha256: '45363d1496d4c0798eb6afe1a12f9cd6d4a32247e10cbe4c191a5122348c7cd0',
          },
        ],
      },
      {
        screenshot: '114-number-populated.jpg',
        sha256: 'af3b27edebca06aa74f453c5a36cdb58443e402441d59119ec6a319602b3643c',
        snapshots: [
          {
            path: '114-number-populated-dom.txt',
            sha256: '926b3da0ea6983c8988a105f1ab1e8605fc9a52ca268160dd054c163a796417f',
          },
          {
            path: '114-number-populated-ax.txt',
            sha256: '0cbf45bd7cbae1a5e5dc2207e84b8e398e8856eb0b2d23ac8d28ebe7ba382fa0',
          },
        ],
      },
      {
        screenshot: '115-number-dynamic-render.jpg',
        sha256: '9578aa2a91a974ec3e2e3819160d2b8593c8203619d563ab4db6e0a4692e148d',
        snapshots: [
          {
            path: '115-number-dynamic-render-dom.txt',
            sha256: 'babf52536dfb9c08e0d38a53ebbd23ae656e2d09711e7e15b23b4c164ba6de8c',
          },
          {
            path: '115-number-dynamic-render-ax.txt',
            sha256: '6b6e63fceb454788af4e5841b3e9c6c0bd0470114ccfaf0c43474485cebb0121',
          },
        ],
      },
      {
        screenshot: '116-number-binding-persisted.jpg',
        sha256: 'ba5ad3008f86f9af018e8e3434e1bb8a5e315d62e8d7b16e07d1a8545792e4c4',
        snapshots: [
          {
            path: '116-number-binding-persisted-dom.txt',
            sha256: '71d89827662457922143fcf68b380fbcd8aa2c6f85450deda3da9eb34932debe',
          },
          {
            path: '116-number-binding-persisted-ax.txt',
            sha256: '74f984809cc5e96bf7fc737ff2943b366180ded204e55eb3095c17b51b00c30d',
          },
        ],
      },
      {
        screenshot: '86-dynamic-page-chooser.jpg',
        sha256: '78153d6357f8f80e13e7223bebe4a8d4c8f9e8239f5bec7872db0f1962c968d0',
        snapshots: [
          {
            path: '86-dynamic-page-chooser-dom.txt',
            sha256: 'acd1fa47bc35d1672bd2c00a9f04128aab21e9290f1e925c7fa1658862a659cc',
          },
          {
            path: '86-dynamic-page-chooser-ax.txt',
            sha256: '8a086e9ecf4cc0a3b02df62463178d0a52b558ae0e013e7382d994821c50fd1d',
          },
        ],
      },
      {
        screenshot: '87-dynamic-page-collection-binding.jpg',
        sha256: '31622d1638b12aa45a4815b4594f6e7dd9ed54b9f2c3214f9258393e25d87cdc',
        snapshots: [
          {
            path: '87-dynamic-page-collection-binding-dom.txt',
            sha256: 'e87bc6e4b74d47fd0a8019940fe087b5a9bd44049896e1f8341b1831aefa2375',
          },
          {
            path: '87-dynamic-page-collection-binding-ax.txt',
            sha256: '3b1a666edecbc36f4ecdba798878251fd3f8dfba0f267c7d9a9614f292745739',
          },
        ],
      },
      {
        screenshot: '88-dynamic-page-collection-options.jpg',
        sha256: '42c73c61e6e806817ec68b954827dd66eb802ee4381ffcce1b63c98bf3566e06',
        snapshots: [
          {
            path: '88-dynamic-page-collection-options-dom.txt',
            sha256: 'fecc159aae2c020f3f39f4236da4214dc738154cc65257332d1de69ba5ae2e69',
          },
          {
            path: '88-dynamic-page-collection-options-ax.txt',
            sha256: '2602025a3a7ba356f19d5ed4d5f9bccd59fad9f905d7bbd6267438c513b2b27a',
          },
        ],
      },
      {
        screenshot: '89-dynamic-page-existing-collection.jpg',
        sha256: 'faae4e16942fb99a075563869eb98c6ebcfd64a4b4f563a5fade58a1a59a9793',
        snapshots: [
          {
            path: '89-dynamic-page-existing-collection-dom.txt',
            sha256: '7da869423682066db91e9c5f097da9cfe71a55974f1a8810d3f8672dd529484a',
          },
          {
            path: '89-dynamic-page-existing-collection-ax.txt',
            sha256: '0a334a4f77c6abd0c7ff8df9d5803e364907baef7d086d087aebe64e45313066',
          },
        ],
      },
      {
        screenshot: '92-dynamic-item-menu.jpg',
        sha256: 'a66a3b6ae02c0694a29a8213d31d7b36d09c9bc11d644602ea414af737657569',
        snapshots: [
          {
            path: '92-dynamic-item-menu-dom.txt',
            sha256: 'ebe1e31d3dc55a641a68ad690b51029f89086e5da94b42e3fa40406b65b2fef4',
          },
          {
            path: '92-dynamic-item-menu-ax.txt',
            sha256: 'c8d85d591374fc30532867a3cd5d270e7a16d0fc87744a71ca79eb50509cc042',
          },
        ],
      },
      {
        screenshot: '95-dynamic-widget-binding-dialog.jpg',
        sha256: 'db2be2fe5eb4bcf9718c1bb6b2ff93dbbfc28b2cc92f8383c29ebf1b0fcb38eb',
        snapshots: [
          {
            path: '95-dynamic-widget-binding-dialog-dom.txt',
            sha256: '82f64484d1ee78b118bfb117ea06f6c7ae1aa4c7b13992a634523f1ad2e09f16',
          },
          {
            path: '95-dynamic-widget-binding-dialog-ax.txt',
            sha256: 'b921043edfa3cc4dba9350cc8d3e501317881e1bb6a3c9a8f7549102a0ad0aae',
          },
        ],
      },
      {
        screenshot: '96-dynamic-widget-field-options.jpg',
        sha256: '2545c2122d8ecbaefd66605061caff5d6ed022522a4a59de5796b079a7aa4505',
        snapshots: [
          {
            path: '96-dynamic-widget-field-options-dom.txt',
            sha256: '9dda3ff9a5e8cbf38ec7060947b5ebd3cc1791f6d8727958c0a54c0650edf3b8',
          },
          {
            path: '96-dynamic-widget-field-options-ax.txt',
            sha256: '048ead43ab04af6f2139e0cca20237cdd962a7a5f61fd85d83f7444f15b89644',
          },
        ],
      },
      {
        screenshot: '97-dynamic-widget-bound.jpg',
        sha256: 'b1e2f78a691cd0b7e7b8d98bb1b80743d0747d4e67c074d6a1ae65d3c11b85b3',
        snapshots: [
          {
            path: '97-dynamic-widget-bound-dom.txt',
            sha256: '39562cf5a64ab536762fcacc421d892b4a491210b71ad941979f7944be2d7e08',
          },
          {
            path: '97-dynamic-widget-bound-ax.txt',
            sha256: 'aafd5a53efdeee3b9a5ed87f9c7a315f0eb81f80ed30f1c6a2d5d6d0bbeb2771',
          },
        ],
      },
      {
        screenshot: '100-dynamic-binding-loaded-item.jpg',
        sha256: '3614afc350b0e6064d3b52f96f4b6a84a6df5443f51976c001063bef1b22fdb8',
        snapshots: [
          {
            path: '100-dynamic-binding-loaded-item-dom.txt',
            sha256: 'f39e6c01dd6dcd4bbe21cde5a7e5132e73131b14fd93c8c33732a682801d5f62',
          },
          {
            path: '100-dynamic-binding-loaded-item-ax.txt',
            sha256: 'dc4adf370dcfb830d83fb07ba8e8a33ddf67c88fd9a3c30e561844a7ce61b0f6',
          },
        ],
      },
      {
        screenshot: '98-dynamic-binding-reload.jpg',
        sha256: '96fc2af18f05d91c1c0d117f95f2a121ccb16836c886c107d4129b72bd01e918',
        snapshots: [
          {
            path: '98-dynamic-binding-reload-dom.txt',
            sha256: 'ce00e6e2d04936e3078e8dd26a09d918cbe5d5f67ae8b1ec615ad256ebbb8f8f',
          },
          {
            path: '98-dynamic-binding-reload-ax.txt',
            sha256: '3059605d0ea518ea25b67d8efe9db41e2c67b2fb027ab52ed6b49a00e8c1bcde',
          },
        ],
      },
    ],
    states: [
      {
        id: 'number-bound',
        title: 'Number bound to text',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '116-number-binding-persisted.jpg',
      },
      {
        id: 'default',
        title: 'Preset chooser',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '86-dynamic-page-chooser.jpg',
      },
      {
        id: 'general',
        title: 'Existing collection settings',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '89-dynamic-page-existing-collection.jpg',
      },
      {
        id: 'options',
        title: 'Collection and field choices',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '96-dynamic-widget-field-options.jpg',
      },
      {
        id: 'plan-gate',
        title: 'New internal collection restricted',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '87-dynamic-page-collection-binding.jpg',
      },
      {
        id: 'bound',
        title: 'Populated item binding',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '97-dynamic-widget-bound.jpg',
      },
      {
        id: 'first-row',
        title: 'Empty first item after reload',
        provenance: 'OBSERVED_STRUCTURE',
        evidence: '98-dynamic-binding-reload.jpg',
      },
      {
        id: 'disabled',
        title: 'Local disabled controls',
        provenance: 'RECONSTRUCTION',
      },
    ],
  },
];
