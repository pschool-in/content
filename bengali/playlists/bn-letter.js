export default {
  label: 'বর্ণ',
  id: 'bn-writing',
  img: 'writing',
  list: [
    {
      id: 'vowels',
      label: 'বাংলা - স্বরবর্ণ লেখা ',
      type: 'tracing',
      data: {
        type: 'custom',
        audio: 'bn-letters.mp3',
        source: [
          {
            id: 'অ',
            paths: [
              'M 144 151 C 117 137 138 112 162 129 C 209 167 183 248 127 245 C 63 245 81 135 11 106 ',
              'M 182 208 C 203 199 229 210 230 245 L 227 96 ',
              'M 5 95 L 247 95 '
            ],
            width: 255,
            audio: 0
          },
          {
            id: 'আ',
            paths: [
              'M 144 151 C 117 137 138 112 162 129 C 209 167 183 248 127 245 C 63 245 81 135 11 106 ',
              'M 182 208 C 203 199 229 210 230 245 L 227 96 ',
              'M  227 96 L 267 97 L 267 245 ',
              'M 226 96 L 266 114 ',
              'M 5 95 L 283 95 '
            ],
            width: 290,
            audio: 2
          },
          {
            id: 'ই',
            paths: [
              'M 96 121 C 71 132 63 99 93 101 C 159 104 153 208 75 197 C 55 195 54 161 82 166 C 129 180 107 235 157 247 ',
              'M 90 93 C 165 62 31 81 51 39 ',
              'M 63 95 L 132 96 '
            ],
            width: 180,
            audio: 4
          },
          {
            id: 'ঈ',
            paths: [
              'M 47 120 C 22 131 14 98 44 100 C 110 103 104 207 8 232 C 65 214 86 170 139 118 C 80 179 95 226 166 214 ',
              'M 104 94 C 179 63 45 82 65 40 ',
              'M 13 95 L 162 95 '
            ],
            width: 180,
            audio: 6
          },
          {
            id: 'উ',
            paths: [
              'M 119 95 L 119 155 C 121 106 183 132 175 179 C 169 233 107 267 66 221 C 37 194 32 123 1 123 ',
              'M 71 95 L 187 95 ',
              'M 115 93 C 190 62 56 81 76 39 '
            ],
            width: 200,
            audio: 8
          },
          {
            id: 'ঊ',
            paths: [
              'M 119 95 L 119 155 C 121 106 183 132 175 179 C 169 233 107 267 66 221 C 37 194 32 123 1 123 ',
              'M 71 95 L 187 95 ',
              'M 115 93 C 190 62 56 81 76 39 ',
              'M 156 220 C 145 313 23 251 7 193 '
            ],
            width: 200,
            audio: 10
          },
          {
            id: 'ঋ',
            paths: [
              'M 116 95 L 45 155 Q 86 168 117 244 L 117 96 ',
              'M 20 94 C 15 127 54 123 63 97 C 65 125 94 112 115 97 ',
              'M 117 189 C 139 180 164 204 173 245 L 173 96 L 213 98 '
            ],
            width: 220,
            audio: 12
          },
          {
            id: 'ঌ',
            paths: [
              'M 33 149 C 6 135 27 110 51 127 C 98 165 67 237 20 243 C 165 244 197 175 140 122 ',
              'M 140 122 C 97 76 33 76 26 25 '
            ],
            width: 180,
            audio: 14
          },
          {
            id: 'এ',
            paths: [
              'M 75 137 C 24 134 48 95 90 97 C 151 97 143 182 132 244 C 121 208 87 199 67 216 C 53 226 15 261 8 229 '
            ],
            width: 150,
            audio: 16
          },
          {
            id: 'ঐ',
            paths: [
              'M 75 137 C 24 134 48 95 90 97 C 151 97 143 182 132 244 C 121 208 87 199 67 216 C 53 226 15 261 8 229 ',
              'M 139 151 C 181 94 113 69 67 40 '
            ],
            width: 165,
            audio: 18
          },
          {
            id: 'ও',
            paths: [
              'M 67 128 C 38 128 37 95 67 95 C 139 95 143 159 89 165 C 155 167 153 246 89 245 Q 24 237 17 161 '
            ],
            width: 145,
            audio: 20
          },
          {
            id: 'ঔ',
            paths: [
              'M 67 128 C 38 128 37 95 67 95 C 139 95 143 159 89 165 C 155 167 153 246 89 245 Q 24 237 17 161 ',
              'M 90 165 C 185 165 212 83 124 47 '
            ],
            width: 185,
            audio: 22
          }
        ]
      }
    },
    {
      id: 'consonants',
      label: 'বাংলা - ব্যঞ্জনবর্ণ লেখা',
      type: 'tracing',
      data: {
        type: 'custom',
        audio: 'bn-letters.mp3',
        source: [
          {
            id: 'ক',
            paths: [
              'M 8 95 L 190 95 ',
              'M 99 97 L 13 166 Q 52 151 101 244',
              'M 101 244 L 99 97 ',
              'M 100 98 C 121 116 197 147 175 193 C 152 225 125 169 157 167 '
            ],
            width: 190,
            audio: 24
          },
          {
            id: 'খ',
            paths: [
              'M 32 117 C 55 130 53 95 35 95 C 12 95 13 141 50 142 C 85 143 89 122 95 95',
              'M 95 95 Q 92 157 29 177 C 87 184 131 227 141 243',
              'M 141 243 L 141 94',
              'M 141 121 L 173 120'
            ],
            width: 180,
            audio: 26
          },
          {
            id: 'গ',
            paths: [
              'M 30 187 C 45 217 121 144 33 108 ',
              'M 33 108 C 70 83 123 95 140 168 ',
              'M 141 95 L 141 245 ',
              'M 141 121 L 173 120'
            ],
            width: 170,
            audio: 28
          },
          {
            id: 'ঘ',
            paths: [
              'M 11 95 L 149 95 ',
              'M 41 97 C 14 124 10 172 77 145 L 35 194 C 82 185 109 215 134 246',
              'M 132 95 L 134 246'
            ],
            width: 160,
            audio: 30
          },
          {
            id: 'ঙ',
            paths: [
              'M 72 95 C 68 141 77 162 114 159 C 160 151 165 92 112 109 C 67 127 77 204 143 186',
              'M 143 186 C 128 294 17 242 15 97'
            ],
            width: 140,
            audio: 32
          },
          {
            id: 'চ',
            paths: [
              'M 15 95 L 162 95 ',
              'M 55 96 L 56 233 ',
              'M 56 233 C 55 266 155 219 155 191 C 157 159 89 157 55 162 '
            ],
            width: 170,
            audio: 34
          },
          {
            id: 'ছ',
            paths: [
              'M 17 96 L 149 97 ',
              'M 55 96 L 54 215 ',
              'M 54 215 C 55 266 141 218 142 191 C 141 159 89 157 55 162 ',
              'M 55 162 C 89 100 179 112 181 175 Q 182 256 54 266 L 173 305 '
            ],
            width: 160,
            audio: 36
          },
          {
            id: 'জ',
            paths: [
              'M 12 95 L 150 95 ',
              'M 71 97 L 69 170 C 104 122 139 187 123 220 C 99 261 17 258 16 159 ',
              'M 75 95 L 179 166 Q 152 149 127 286 '
            ],
            width: 165,
            audio: 38
          },
          {
            id: 'ঝ',
            paths: [
              'M 21 95 L 206 95 ',
              'M 125 95 L 29 177 C 91 181 115 216 128 245',
              'M 128 245 L 128 95 ',
              'M 128 196 L 173 243 L 171 96'
            ],
            width: 180,
            audio: 40
          },
          {
            id: 'ঞ',
            paths: [
              'M 62 123 C 85 122 85 151 62 149 C 36 147 34 95 87 95 Q 126 97 111 245 ',
              'M 111 245 C 60 186 11 287 12 218 ',
              'M 115 149 C 144 111 217 181 119 185 C 215 177 175 260 113 221 '
            ],
            width: 200,
            audio: 42
          },
          {
            id: 'ট',
            paths: [
              'M 11 95 L 169 95 ',
              'M 64 95 L 64 210 C 61 274 183 241 155 179 C 137 145 95 205 131 211 ',
              'M 65 95 C 135 47 40 49 50 21 '
            ],
            width: 170,
            audio: 44
          },
          {
            id: 'ঠ',
            paths: [
              'M 11 95 L 169 95 ',
              'M 95 97 C 110 138 37 135 53 199 C 73 274 145 250 137 171',
              'M 137 171 C 130 110 61 95 69 21 '
            ],
            width: 170,
            audio: 46
          },
          {
            id: 'ড',
            paths: [
              'M 11 95 L 169 95 ',
              'M 95 95 L 95 167 ',
              'M 95 167 C 126 122 182 159 139 215 C 103 258 19 222 25 141 '
            ],
            width: 170,
            audio: 48
          },
          {
            id: 'ঢ',
            paths: [
              'M 11 95 L 169 95 ',
              'M 64 95 L 64 210 C 61 274 183 241 155 179 C 137 145 95 205 131 211 '
            ],
            width: 170,
            audio: 50
          },
          {
            id: 'ণ',
            paths: [
              'M 42 135 C 65 154 27 184 13 156 C 3 128 55 93 107 157 ',
              'M 107 95 L 107 246 ',
              'M 107 111 L 137 111 '
            ],
            width: 145,
            audio: 52
          },
          {
            id: 'ত',
            paths: [
              'M 9 95 L 171 95 ',
              'M 128 116 C 134 172 63 154 90 111 C 111 81 184 118 147 193 C 117 247 15 206 18 147 '
            ],
            width: 170,
            audio: 54
          },
          {
            id: 'থ',
            paths: [
              'M 55 109 C 67 143 26 157 17 125 C 10 99 47 89 72 96 C 115 106 83 182 35 192 ',
              'M 35 192 Q 89 193 131 245 ',
              'M 131 95 L 131 245',
              'M 131 122 L 167 122 '
            ],
            width: 170,
            audio: 56
          },
          {
            id: 'দ',
            paths: [
              'M 19 95 L 155 95 ',
              'M 50 95 L 49 176 L 126 139 Q 104 178 128 241 '
            ],
            width: 160,
            audio: 58
          },
          {
            id: 'ধ',
            paths: [
              'M 105 95 L 32 175 L 105 245 ',
              'M 105 95 L 105 245 ',
              'M 104 95 C 88 125 8 154 6 117 C 6 95 46 89 40 120 ',
              'M 106 120 L 135 120 '
            ],
            width: 140,
            audio: 60
          },
          {
            id: 'ন',
            paths: [
              'M 60 180 C 67 216 14 226 15 183 C 19 125 119 154 128 244 ',
              'M 128 95 L 129 245 ',
              'M 17 95 L 183 95 '
            ],
            width: 185,
            audio: 62
          },
          {
            id: 'প',
            paths: [
              'M 13 122 C 53 92 115 105 130 133 ',
              'M 13 121 Q 73 129 50 174 L 129 132 ',
              'M 132 94 L 129 244 ',
              'M 131 110 L 158 111 '
            ],
            width: 170,
            audio: 64
          },
          {
            id: 'ফ',
            paths: [
              'M 16 95 L 194 95 ',
              'M 37 95 L 78 137 L 35 179 Q 100 183 129 245 L 129 95 ',
              'M 130 141 C 167 114 221 138 185 165 Q 159 174 166 140 '
            ],
            width: 205,
            audio: 66
          },
          {
            id: 'ব',
            paths: [
              'M 15 95 L 146 95 ',
              'M 113 95 L 27 163 Q 69 177 113 245 ',
              'M 113 95 L 113 244 '
            ],
            width: 155,
            audio: 68
          },
          {
            id: 'ভ',
            paths: [
              'M 11 95 L 183 95 ',
              'M 71 128 C 128 131 69 69 57 119 C 45 175 146 151 161 106 C 159 158 139 206 85 206 C 51 208 14 179 13 135 '
            ],
            width: 185,
            audio: 70
          },
          {
            id: 'ম',
            paths: [
              'M 13 95 L 180 95 ',
              'M 49 95 C 105 147 80 260 37 181 C 10 116 135 138 146 245 ',
              'M 147 95 L 146 245 '
            ],
            width: 180,
            audio: 72
          },
          {
            id: 'য',
            paths: [
              'M 13 95 L 160 95 ',
              'M 32 96 L 88 137 L 37 177 C 97 175 125 208 142 246 ',
              'M 141 97 L 141 245 '
            ],
            width: 160,
            audio: 74
          },
          {
            id: 'র',
            paths: [
              'M 15 95 L 146 95 ',
              'M 113 95 L 27 163 Q 69 177 113 245 ',
              'M 113 95 L 113 244 ',
              'M 31 209 L 31 237 '
            ],
            width: 150,
            audio: 76
          },
          {
            id: 'ল',
            paths: [
              'M 40 139 C 60 167 15 207 15 151 C 19 114 87 125 85 170 C 82 111 127 125 149 172 ',
              'M 149 95 L 149 246 ',
              'M 72 95 L 183 95 '
            ],
            width: 180,
            audio: 78
          },
          {
            id: 'শ',
            paths: [
              'M 15 118 C 96 109 109 181 67 180 C 43 179 39 141 69 128 C 127 101 175 180 119 178 C 93 181 101 122 162 125 Q 178 124 192 155 ',
              'M 192 95 L 191 246 ',
              'M 191 115 L 225 116 '
            ],
            width: 225,
            audio: 80
          },
          {
            id: 'ষ',
            paths: [
              'M 13 95 L 160 95 ',
              'M 32 96 L 88 137 L 37 177 C 97 175 125 208 142 246 ',
              'M 141 97 L 141 245 ',
              'M 88 136 L 140 183 '
            ],
            width: 170,
            audio: 82
          },
          {
            id: 'স',
            paths: [
              'M 13 95 L 160 95 ',
              'M 75 96 L 21 161 C 63 131 95 162 83 202 Q 59 259 16 203 ',
              'M 85 182 Q 115 178 137 233 ',
              'M 139 95 L 138 234 '
            ],
            width: 165,
            audio: 84
          }
        ],
        chars: [],
        repeatCount: 1
      }
    },

    {
      type: 'rightOne',
      label: 'ধ্বনি শুনে স্বরবর্ণ নির্বাচন',
      slug: 'correct-spelling',
      id: 'sound',
      data: {
        title: 'ধ্বনি শুনে বর্ণ পরিচয় করুন',
        type: 'letters',
        words: 'অ, আ, ই, ঈ, উ, ঊ, ঋ, ৯, এ, ঐ, ও, ঔ',
        audio: 'bn-letters.mp3'
      }
    },
    {
      type: 'rightOne',
      label: 'ধ্বনি শুনে ব্যঞ্জনবর্ণ নির্বাচন',
      id: 'sound-2',
      commonData: {
        title: 'ধ্বনি শুনে বর্ণ পরিচয় করুন ',
        type: 'letters',
        audio: 'bn-letters.mp3'
      },
      data: [
        {
          audioOffset: 24,
          words: 'ক, খ, গ, ঘ, ঙ, চ , ছ, জ, ঝ, ঞ'
        },
        {
          audioOffset: 44,
          words: 'ট, ঠ, ড, ঢ,	ণ, ত, থ, দ, ধ, ন'
        },
        {
          audioOffset: 64,
          words: 'প, ফ,	ব,	ভ,	ম, য, র, ল,	শ,	ষ,	স'
        }
      ]
    },
    {
      id: '100',
      type: 'passage',
      label: 'বর্ণ ছড়া অ-ঊ',
      data: {
        title: 'অজগর আসছে তেড়ে',
        type: 'poem',
        text: `অ - অজগর আসছে তেড়ে
আ - আমটি আমি খাব পেড়ে
ই - ইঁদুরছানা ভয়ে মরে
ঈ - ঈগল পাখি পাছে ধরে
উ - উট চলেছে মুখটি তুলে
ঊ - [দীর্ঘ ] ঊ -টি আছে ঝুলে`
      }
    },
    {
      id: '200',
      type: 'passage',
      label: 'বর্ণ ছড়া ঋ-ঔ',
      data: {
        title: 'ঋষি মশাই বসেন পূজায়',
        type: 'poem',
        text: `ঋ - ঋষি মশাই বসেন পূজায়
ঌ - ঌ -কার যেন ডিগবাজি খায়
এ - এক্কা গাড়ি খুব ছুটেছে
ঐ - ঐ দেখ ভাই চাঁদ উঠেছে
ও - ওল খেয়ো না ধরবে গলা
ঔ - ঔষধ খেতে মিছে বলা`
      }
    },
    {
      id: '300',
      type: 'passage',
      label: 'বর্ণ ছড়া ক-ঙ',
      data: {
        title: 'কাকাতুয়ার মাথায় ঝুঁটি',
        type: 'poem',
        text: `ক - কাকাতুয়ার মাথায় ঝুঁটি
খ - খ্যাঁকশিয়ালি পালায় ছুটি
গ - গরু বাছুর দাড়িয়ে আছে
ঘ - ঘুঘুপাখি ডাকছে গাছে
ঙ - ঙ নৌকা মাঝি ব্যাঙ`
      }
    },
    {
      id: '400',
      type: 'passage',
      label: 'বর্ণ ছড়া চ-ঞ',
      data: {
        title: 'চিতা বাঘের সরু ঠ্যাং',
        type: 'poem',
        text: `চ - চিতা বাঘের সরু ঠ্যাং
ছ - ছাগলছানা লাফিয়ে চলে
জ - জাহাজ ভাসে সাগর জলে
ঝ - ঝাড়ু হাতে এল কানাই
ঞ - ঞ চড়ে নাচছে দুভাই`
      }
    },
    {
      id: '500',
      type: 'passage',
      label: 'বর্ণ ছড়া ট-ণ',
      data: {
        title: 'টিয়া পাখির ঠোঁটটি লাল',
        type: 'poem',
        text: `ট - টিয়া পাখির ঠোঁটটি লাল
ঠ - ঠাকুরদাদার শুকনো গাল
ড - ডুলি কাঁধে বেহারা যায়
ঢ - ঢুলিভায়া ঢোলক বাজায়
ণ - [মূর্ধন্য]ণ নাকের 'পরে`
      }
    },
    {
      id: '600',
      type: 'passage',
      label: 'বর্ণ ছড়া ত-ন',
      data: {
        title: 'বাক বাকুম পায়রা',
        type: 'poem',
        text: `ত - তিমি আপন শিকার ধরে
থ - থালা ভরা আছে মিঠাই
দ - দোয়াত আছে কালি নাই
ধ - ধোপা কেমন কাপড় কাচে
ন - নাপিতভায়া দাড়ি চাঁচে`
      }
    },
    {
      id: '700',
      type: 'passage',
      label: 'বর্ণ ছড়া প-ম',
      data: {
        title: 'পাখির বাসা হাওয়ায় নড়ে',
        type: 'poem',
        text: `প - পাখির বাসা হাওয়ায় নড়ে
ফ - ফোয়ারা হতে জল পড়ে
ব - বুলবুলিটির মুখটি কালো
ভ - ভালুক জানে বাসতে ভালো
ম - ময়ূর নাচে পেখম ধরে`
      }
    },
    {
      id: '800',
      type: 'passage',
      label: 'বর্ণ ছড়া য-স',
      data: {
        title: 'যাতা ঘোরে হাতের জোরে',
        type: 'poem',
        text: `য - যাতা ঘোরে হাতের জোরে
র - রাজহাঁসটির গলা সরু
ল - লাঠির চোটে পালায় গরু
ব - বাঘের যত সাহস চোখে
শ - শকুন কাঁদে গরুর শোকে
ষ - ষাঁড় ছুটেছে পুকুরপাড়ে
স - সিংহ রাগে কেশর নাড়ে`
      }
    },
    {
      id: '900',
      type: 'passage',
      label: 'বর্ণ ছড়া হ-চন্দ্রবিন্দু',
      data: {
        title: 'হাসি মুখটি দেখতে বেশ',
        type: 'poem',
        text: `হ - হাসি মুখটি দেখতে বেশ
ড় - ড়-এর দফা হলো শেষ
ঢ় - ঢ়-এর মাথা কামড়ে খায়
ৎ - [খণ্ড-ত]ৎ ঐ পুষির গায়
য় - য় ছিল তাই গেল বেঁচে
ং - [অনুস্বার] ং-টি হারিয়ে গেছে
ঃ - [বিসর্গ] ঃ-এর ভুঁড় পেট
ঁ - [চন্দ্রবিন্দু] ঁ-র মাথা হেঁট`
      }
    },
    {
      label: 'বর্ণের ক্রম',
      type: 'sorting',
      id: 'ascending',
      commonData: {
        title: 'অক্ষরগুলি সঠিক ক্রমে সাজান',
        multiple: true,
        fontSize: '2rem'
      },
      data: [
        `অ, আ, ই, ঈ, উ, ঊ
ঋ, ৯, এ, ঐ, ও, ঔ`,
        `ক, খ, গ, ঘ, ঙ
চ , ছ, জ,	ঝ, ঞ`,
        `ট,	ঠ,	ড,	ঢ,	ণ
ত,	থ,	দ,	ধ,	ন
প,	ফ,	ব,	ভ,	ম`,
        `য,	র,	ল,	শ,	ষ,	স
হ,	ড়,	ঢ়,	য়,	ৎ`
      ]
    },

    {
      type: 'group',
      label: 'স্বরবর্ণ vs ব্যঞ্জনবর্ণ ',
      id: 'classify-letter-type',
      commonData: {
        title: 'স্বরবর্ণ ও ব্যঞ্জনবর্ণ গুলি সঠিক বক্সে রাখুন ',
        fontSize: '2rem',
        printTitle:
          'Rewrite the words given at the bottom at approprate boxes.',
        types: ['স্বরবর্ণ', 'ব্যঞ্জনবর্ণ']
      },
      data: [
            [`অ, আ, ই, ঈ, উ, ঊ`, `ক, খ, গ, ঘ, ঙ`],
      [`ঋ, ৯, এ, ঐ`, `চ , ছ, জ,	ঝ, ঞ`],
      [`উ, ঊ, ও, ঔ`, `প, ফ,	ব,	ভ,	ম, র`],
      [`অ, আ, ঋ, ৯`, `য, র,	ল,	শ,	ষ`],
      [`অ, আ,  ও, ঔ`, `য, র,	ল,	শ,	ষ,	স`],
      [`ঐ, ই, ও, ঔ`, `ছ, জ, ফ, ব,	স, ট`],
      [`আ, ই, ঈ, ই, ও, ঔ`, `ক, খ, ফ, ব,	স`],
      [`ঋ, ৯, এ, আ, ই`, `চ , ছ,  ট, ঠ,	ড`],
      [`ও, ঔ, উ, ঊ`,`ট, ঠ,	ড,	ঢ,	ণ`],
      [`অ, আ, ই, ঈ`,`ল,	শ,	ষ,	স, ঝ`],
      [`এ, ঐ, ও, ঔ`,`স, হ, ড়, ঢ়, য়,ৎ`],
      [`উ, ঊ,৯, এ`,`ঝ, ঞ, ট, ঠ,ড`],
      [` ঈ, ঔ, উ, ঊ`,`শ, ষ, ঘ, ঙ, ড,ঢ,	ণ`],
      [`আ, ই, ঔ`,`ঠ, ড়, ঢ়, ড,জ,ঞ`]
      ]
    },

    {
      //Coumpound letters
      id: 'Coumpound-letters-bn-1',
      type: 'match',
      label: 'বর্ণ - ব্যঞ্জনবর্ণের সাথে স্বরবর্ণ যোগ (ক-ঙ)',
      commonData: {
        title: 'সঠিক অক্ষর মেলান',
        fontSize: '2rem'
      },
      data: [
        `ক + আ, কা 
          ক + ই, কি
          ক + ঈ, কী 
          ক + উ, কু  
          ক + ঊ, কূ`,

        `ক +ঋ, কৃ
          ক +এ, কে
          ক +ঐ, কৈ
          ক +ও, কো
          ক +ঔ, কৌ`,

        `খ + আ, খা
          খ + ই, খি
          খ + ঈ, খী
          খ + উ, খু
          খ + ঊ, খূ`,

        `খ + ঋ, খৃ
          খ + এ, খে
          খ + ঐ, খৈ
          খ + ও, খো
          খ + ঔ, খৌ`,

        `গ + আ, গা
          গ + ই, গু
          গ + ঈ, গী
          গ + উ, গু
          গ + ঊ, গূ`,

        `গ + ঋ, গৃ
          গ + এ, গে
          গ + ঐ, গৈ
          গ + ও, গো
          গ + ঔ, গৌ`,

        `ঘ + আ, ঘা 
          ঘ + ই, ঘি
          ঘ + ঈ, ঘী
          ঘ +উ, ঘু
          ঘ + ঊ, ঘূ`,

        `ঘ + ঋ, ঘৃ
          ঘ + এ, ঘে 
          ঘ +ঐ, ঘৈ 
          ঘ +ও, ঘো 
          ঘ +ঔ, ঘৌ`,

        `ঙ + আ, ঙা
          ঙ + ই, ঙি 
          ঙ + উ, ঙু
          ঙ + এ, ঙে`
      ]
    },

    {
      //Coumpound letters
      id: 'Coumpound-letters-bn-2',
      type: 'match',
      label: 'বর্ণ - যুক্তাক্ষর',
      commonData: {
        title: 'সঠিক যুক্তাক্ষর মেলান',
        fontSize: '2rem'
      },
      data: [
        `ক + ক, ক্ক
ক + ট, ক্ট
ক + ত, ক্ত
ক + ব,  ক্ব
ক + ম,  ক্ম
ক + র, ক্র`,

        `ক + ল, ক্ল
খ + খ, ক্ষ
খ + খ + ম, ক্ষ্ম
ক + স, ক্স
গ + ধ, গ্ধ
গ + ল, গ্ল`,

        `ন + ক, ঙ্ক
ন + গ, ঙ্গ
চ + ছ, চ্ছ
জ + জ, জ্জ
য + ণ, জ্ঞ
ণ + চ, ঞ্চ`,

        `ট + ট, ট্ট
ন + ট, ন্ট
ত + ত, ত্ত
ত + র, ত্র
দ + দ, দ্দ
দ + ধ, দ্ধ`,

        `ন + ট, ন্ট
ন + ত, ন্ত
ত + ন, ত্ন
ন + দ, ন্দ
দ + ব, দ্ব
ন + ধ, ন্ধ`,

        `প + ত, প্ত
প + ন, প্ন
প + ল, প্ল
ল + ল, ল্ল
ষ + ন, ষ্ণ
শ + ব, শ্ব`
      ]
    }
  ]
};
