export default {
  label: 'Letters',
  lang: 'ml',
  id: 'ml-letter',
  list: [
    {
      type: 'tracing',
      id: 'vowels',
      label: 'Vowels - writing',
      data: {
        type: 'custom',
        audio: 'ml/ml-vowel.mp3',
        yGuides: [95, 250],
        source: [
          {
            id: 'അ',
            width: 270,
            paths: [
              'M 46 245 Q 12 184 19 150 C 28 104 45 94 81 112 C 132 136 146 176 98 174 ',
              'M 98 174 C 152 166 162 244 98 245 C 64 244 41 95 117 94 C 187 94 176 186 174 244 ',
              'M 174 244 L 176 148 C 174 78 246 82 251 130 C 273 273 230 246 219 232 C 191 194 232 166 256 200 '
            ],
            audio: 0
          },
          {
            id: 'ആ',
            width: 280,
            paths: [
              'M 46 245 Q 12 184 19 150 C 28 104 45 94 81 112 C 132 136 146 176 98 174 ',
              'M 98 174 C 152 166 162 244 98 245 C 64 244 41 95 117 94 C 187 94 176 186 174 244 ',
              'M 174 244 L 176 148 C 174 78 246 82 251 130 C 273 273 230 246 219 232 C 191 194 232 166 256 200 C 280 231 271 253 252 277 '
            ],
            audio: 2
          },
          {
            id: 'ഇ',
            width: 200,
            paths: [
              'M 22 131 C 96 136 9 204 11 149 C 13 75 105 73 103 167 ',
              'M 103 167 C 94 65 204 79 193 149 C 191 192 145 208 67 205 ',
              'M 67 205 C -7 206 1 260 41 259 L 180 261 '
            ],
            audio: 4
          },
          {
            id: 'ഈ',
            width: 310,
            paths: [
              'M 22 131 C 96 136 9 204 11 149 C 13 75 105 73 103 167 ',
              'M 103 167 C 94 65 204 79 193 149 C 191 192 145 208 67 205 ',
              'M 67 205 C -7 206 1 260 41 259 L 180 261 ',
              'M 205 150 C 205 64 251 93 246 146 ',
              'M 246 146 C 255 75 309 80 303 145 C 297 203 251 238 223 235 '
            ],
            audio: 6
          },
          {
            id: 'ഉ',
            width: 120,
            paths: [
              'M 17 131 C 91 136 4 204 6 149 C 8 75 100 73 98 167 ',
              'M 98 167 C 99 186 89 203 62 205 C -12 206 -4 260 36 259 L 105 260 '
            ],
            audio: 8
          },
          {
            id: 'ഊ',
            width: 230,
            paths: [
              'M 17 131 C 91 136 4 204 6 149 C 8 75 100 73 98 167 ',
              'M 98 167 C 99 186 89 203 62 205 C -12 206 -4 260 36 259 L 105 260 ',
              'M 121 149 C 121 63 167 92 162 145 ',
              'M 162 145 C 171 74 225 79 219 144 C 213 202 167 237 139 234 '
            ],
            audio: 10
          },
          {
            id: 'ഋ',
            width: 220,
            paths: [
              'M 22 159 C 161 169 57 42 19 122 C 3 164 13 245 115 244 C 181 246 181 311 116 311 ',
              'M 116 311 C 63 308 53 245 116 245 C 205 243 253 191 232 129 C 191 35 81 161 225 155 '
            ],
            audio: 12
          },
          {
            id: 'എ',
            width: 230,
            paths: [
              'M 19 243 C -1 228 2 191 40 193 C 75 194 73 223 57 244 ',
              'M 57 244 L 166 244 L 166 120 ',
              'M 166 120 L 166 252 C 161 331 79 212 115 141 C 170 28 259 118 198 247 '
            ],
            audio: 14
          },
          {
            id: 'ഏ',
            width: 240,
            paths: [
              'M 19 243 C -1 228 2 191 40 193 C 75 194 73 223 57 244 ',
              'M 57 244 L 166 244 L 166 120 ',
              'M 166 120 L 166 252 C 161 331 79 212 115 141 C 170 28 288 139 193 175 C 261 191 235 249 191 244 '
            ],
            audio: 16
          },
          {
            id: 'ഐ',
            width: 320,
            paths: [
              'M 21 179 C 67 163 82 248 20 243 C -9 244 -7 96 55 96 C 109 89 91 180 80 244 ',
              'M 116 245 C 96 230 99 193 137 195 C 172 196 170 225 154 246 ',
              'M 154 244 L 263 244 L 263 120 ',
              'M 263 120 L 263 252 C 258 331 176 212 212 141 C 267 28 356 118 295 247 '
            ],
            audio: 18
          },
          {
            id: 'ഒ',
            width: 170,
            paths: [
              'M 37 179 C 83 163 98 248 36 243 C -9 248 9 96 82 96 C 180 93 170 157 115 167 ',
              'M 115 166 C 171 157 188 243 113 243 '
            ],
            audio: 20
          },
          {
            id: 'ഓ',
            width: 270,
            paths: [
              'M 40 179 C 86 163 101 248 39 243 C -6 248 12 96 85 96 C 183 93 173 157 118 167 ',
              'M 118 166 C 174 157 191 243 116 243 ',
              'M 183 124 C 197 67 254 97 256 158 C 259 238 209 271 181 218 '
            ],
            audio: 22
          },
          {
            id: 'ഔ',
            width: 290,
            paths: [
              'M 39 179 C 85 163 100 248 38 243 C -7 248 11 96 84 96 C 182 93 172 157 117 167 ',
              'M 117 167 C 173 158 190 244 115 244 ',
              'M 186 151 C 186 65 232 94 227 147 ',
              'M 227 147 C 236 76 290 81 284 146  C 278 204 234 262 204 236 '
            ],
            audio: 24
          }
        ],
        repeatCount: 1
      }
    },
    /*[two alphabets missing]*/
    {
      id: 'consonants',
      label: 'Consonants - writing',
      type: 'tracing',
      data: {
        type: 'custom',
        audio: 'ml/ml-consonent.mp3',
        yGuides: [95, 250],
        source: [
          {
            id: 'ക',
            paths: [
              'M 83 173 C 82 75 178 67 173 169 ',
              'M 173 169 C 173 275 82 262 83 173 ',
              'M 83 173 C 84 240 60 258 24 227',
              'M 24 227 C -3 203 19 151 69 152 L 185 154 C 254 156 274 247 166 245 '
            ],
            width: 250,
            audio: 0
          },
          {
            id: 'ഖ',
            paths: [
              'M 18 197 C 31 155 69 138 100 181 C 129 225 49 269 23 224 C 1 177 11 101 100 94 C 166 92 185 216 113 245 ',
              'M 113 245 L 230 244 L 231 94 '
            ],
            width: 240,
            audio: 2
          },
          {
            id: 'ഗ',
            paths: [
              'M 37 95 C 2 144 12 286 92 230 C 151 183 77 96 169 95 C 243 94 257 247 153 247 '
            ],
            width: 240,
            audio: 4
          },
          {
            id: 'ഘ',
            paths: [
              'M 15 245 Q -4 198 33 181 C 66 167 108 191 69 244 ',
              'M 69 244 L 188 243 L 191 126 ',
              'M 191 126 C 189 75 107 84 112 190 L 111 282 L 246 281 L 245 95 '
            ],
            width: 260,
            audio: 6
          },
          {
            id: 'ങ',
            paths: [
              'M 17 175 C 119 138 112 247 44 245 C -10 243 4 159 44 120 C 128 43 134 170 125 244 ',
              'M 125 245 Q 128 118 172 103 C 228 81 264 174 162 178 C 252 175 260 251 160 245 '
            ],
            width: 240,
            audio: 8
          },
          {
            id: 'ച',
            paths: [
              'M 52 202 C 14 162 138 144 86 208 Q 64 239 17 246 ',
              'M 17 246 L 160 245 L 165 96 '
            ],
            width: 170,
            audio: 10
          },
          {
            id: 'ഛ',
            paths: [
              'M 47 202 C 9 162 133 144 81 208 Q 59 239 12 246 ',
              'M 12 246 L 155 245 C 120 141 145 91 197 95 C 264 97 270 207 225 239 C 170 271 177 102 247 163 '
            ],
            width: 265,
            audio: 12
          },
          {
            id: 'ജ',
            paths: [
              'M 27 181 C 71 111 133 170 81 233 C 50 271 3 191 29 146 C 73 72 158 70 151 227 ',
              'M 151 227 C 157 62 257 71 256 155 C 263 265 137 231 65 263 C 41 272 9 285 14 316 ',
              'M  14 316 C 36 414 117 260 199 253 C 286 251 277 313 237 335 Q 173 373 167 297 '
            ],
            width: 270,
            audio: 14
          },
          {
            id: 'ഝ',
            paths: [
              'M 33 244 C -11 171 16 94 63 95 C 115 92 167 237 91 245 ',
              'M 91 245 C 48 244 77 95 152 96 C 214 95 129 215 193 245 C 210 255 253 222 247 97 ',
              'M 247 97 C 250 205 244 229 271 243 C 309 259 345 233 331 156 Q 325 117 307 96 '
            ],
            width: 340,
            audio: 16
          },
          {
            id: 'ഞ',
            paths: [
              'M 38 170 C 119 138 112 247 44 245 C -10 243 4 159 44 120 C 128 43 134 170 125 244 ',
              'M 125 244 Q 128 117 172 102 C 228 80 261 246 205 244 C 162 243 154 145 249 103 C 289 85 314 127 309 175 Q 306 216 276 245 '
            ],
            width: 320,
            audio: 18
          },
          {
            id: 'ട',
            paths: [
              'M 91 108 C 62 74 -8 112 16 156 C 44 197 79 146 96 192 C 112 249 11 262 8 214 '
            ],
            width: 110,
            audio: 20
          },
          {
            id: 'ഠ',
            paths: [
              'M 70 95 C 27 94 9 143 10 170 C 7 214 43 245 70 245 ',
              'M 68 245 C 103 244 129 201 128 170 C 129 132 105 95 66 95 '
            ],
            width: 140,
            audio: 22
          },
          {
            id: 'ഡ',
            paths: [
              'M 23 245 C -5 165 20 95 63 95 C 90 93 103 136 86 195 Q 78 235 101 244 C 123 247 163 263 165 97 ',
              'M 165 97 Q 148 261 203 246 C 247 241 270 177 249 94 '
            ],
            width: 270,
            audio: 24
          },
          {
            id: 'ഢ',
            paths: [
              'M 23 245 C -5 165 20 95 63 95 C 90 93 103 136 86 195 Q 78 235 101 244 C 123 247 163 263 165 97 ',
              'M 165 97 Q 148 261 203 246 C 247 241 283 151 256 111 C 238 85 201 91 209 147 Q 217 181 250 188 '
            ],
            width: 275,
            audio: 26
          },
          {
            id: 'ണ',
            paths: [
              'M 38 170 C 119 138 112 247 44 245 C -10 243 4 159 44 120 C 117 48 134 170 132 179 L 130 244 ',
              'M 130 244 C 129 149 151 93 176 97 C 204 99 211 164 205 244 ',
              'M 205 244 C 212 173 202 94 252 97 C 288 95 324 185 270 242 '
            ],
            width: 310,
            audio: 28
          },
          {
            id: 'ത',
            paths: [
              'M 33 244 C -11 171 16 94 63 95 C 120 96 191 245 109 245 C 35 244 77 95 164 97 C 214 95 235 175 188 244 '
            ],
            width: 225,
            audio: 30
          },
          {
            id: 'ഥ',
            paths: [
              'M 12 95 L 12 244 L 170 245 ',
              'M 170 245 C 182 108 140 71 108 112 Q 84 147 90 243 '
            ],
            width: 180,
            audio: 32
          },
          {
            id: 'ദ',
            paths: [
              'M 24 243 C -11 177 20 111 54 98 C 114 78 150 171 41 174 ',
              'M 41 174 C 138 172 122 272 44 231 '
            ],
            width: 120,
            audio: 34
          },
          {
            id: 'ധ',
            paths: [
              'M 14 96 Q -1 168 23 216 C 33 246 118 293 110 97 ',
              'M 110 97 C 106 252 166 286 203 202 Q 217 157 186 96 '
            ],
            width: 220,
            audio: 36
          },
          {
            id: 'ന',
            paths: [
              'M 40 243 Q 2 194 12 133 C 22 65 120 87 114 181 L 113 245 ',
              'M 113 245 L 114 172 C 120 63 206 89 213 134 Q 227 198 183 246 '
            ],
            width: 230,
            audio: 38
          },
          {
            id: 'പ',
            paths: [
              'M 15 246 C -7 213 34 151 70 183 Q 97 205 65 245 ',
              'M 65 245 L 169 245 L 170 95 '
            ],
            width: 180,
            audio: 40
          },
          {
            id: 'ഫ',
            paths: [
              'M 15 246 C -7 213 34 151 70 183 Q 97 205 65 245 ',
              'M 65 245 L 226 245 L 227 131 ',
              'M 227 131 C 231 81 147 89 150 132 L 147 243 '
            ],
            width: 235,
            audio: 42
          },
          {
            id: 'ബ',
            paths: [
              'M 38 170 C 119 138 112 247 44 245 C -10 243 4 159 44 120 C 117 48 134 170 132 179 L 130 244 ',
              'M 130 244 C 129 149 151 93 176 97 C 222 93 248 179 187 243 ',
              'M 187 243 L 272 243 L 272 95 '
            ],
            width: 280,
            audio: 44
          },
          {
            id: 'ഭ',
            paths: [
              'M 24 243 C -11 177 20 111 54 98 C 114 78 152 162 85 141 ',
              'M 85 141 C 54 134 57 185 106 187 C 145 185 127 280 58 225 '
            ],
            width: 140,
            audio: 46
          },
          {
            id: 'മ',
            paths: [
              'M 17 237 C -14 121 71 78 114 103 C 168 140 68 226 28 245 ',
              'M 28 245 L 150 245 L 130 121 '
            ],
            width: 155,
            audio: 48
          },
          {
            id: 'യ',
            paths: [
              'M 91 147 C 101 84 182 68 169 173 C 159 241 33 283 11 185 ',
              'M 11 185 C -4 106 68 61 82 127 C 85 157 95 195 124 228 C 160 279 279 204 221 96 '
            ],
            width: 250,
            audio: 50
          },
          {
            id: 'ര',
            paths: [
              'M 27 244 C -16 147 35 75 111 102 Q 156 119 157 170 C 159 229 95 276 79 216 Q 65 147 137 132 '
            ],
            width: 165,
            audio: 52
          },
          {
            id: 'ല',
            paths: [
              'M 27 159 L 94 159 C 102 88 17 71 18 144 L 19 245 ',
              'M 19 245 L 170 246 L 170 96'
            ],
            width: 180,
            audio: 54
          },
          {
            id: 'വ',
            paths: [
              'M 35 247 C -26 119 67 58 117 123 Q 146 167 91 245',
              'M 91 245 L 189 246 L 190 96 '
            ],
            width: 200,
            audio: 56
          },
          {
            id: 'ശ',
            paths: [
              'M 37 95 C 2 144 12 286 92 230 C 151 183 77 96 169 95 ',
              'M 169 95 C 243 94 289 276 191 238 C 153 222 156 159 217 139 '
            ],
            width: 255,
            audio: 58
          },
          {
            id: 'ഷ',
            paths: [
              'M 20 246 C -2 213 39 151 75 183 Q 102 205 70 245 ',
              'M 70 245 L 230 244 L 230 95 ',
              'M 230 95 C 198 143 120 176 123 127 C 126 67 192 85 172 243 '
            ],
            width: 240,
            audio: 60
          },
          {
            id: 'സ',
            paths: [
              'M 25 245 Q 6 186 16 130 C 30 73 114 87 108 181 L 107 245 ',
              'M 107 245 L 108 172 C 114 63 200 89 207 134 C 214 175 172 244 214 245 C 313 251 292 152 282 95 '
            ],
            width: 300,
            audio: 62
          },
          {
            id: 'ഹ',
            paths: [
              'M 18 246 C -4 213 37 151 73 183 Q 100 205 68 245',
              'M 68 245 L 172 245 C 139 228 108 96 194 97 C 261 96 289 200 227 245 '
            ],
            width: 275,
            audio: 64
          },
          {
            id: 'ള',
            paths: [
              'M 23 172 C 90 144 95 245 47 245 C -7 243 7 159 47 120 Q 85 88 142 96 C 216 117 189 185 131 183 ',
              'M 131 183 C 195 179 217 227 123 253 C 86 265 29 276 18 298 Q 3 349 201 319 '
            ],
            width: 200,
            audio: 66
          },
          {
            id: 'റ',
            paths: ['M 24 245 C -5 181 26 95 91 97 C 160 95 176 201 131 247 '],
            width: 170,
            audio: 68
          },
          {
            id: 'ഴ',
            paths: [
              'M 38 95 C 2 148 4 242 84 245 C 156 253 196 237 199 155 ',
              'M 199 155 C 201 93 108 55 120 163 C 128 229 180 185 222 247 C 242 289 166 361 122 283 '
            ],
            width: 240,
            audio: 70
          }
        ]
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Letter',
      id: 'sound-letter',
      lockAfter: 3,
      commonData: {
        title: 'Identify Letter based on Sound',
        type: 'letters'
      },
      data: [
        {
          audioOffset: 0,
          audio: 'ml/ml-letter-1.mp3',
          words: 'ക, കാ, കി, കീ, കു, കൂ, കെ, കേ, കൊ, കോ, കൌ, കം, കഃ'
        },
        {
          audioOffset: 26,
          audio: 'ml/ml-letter-1.mp3',
          words: 'ഖ, ഖാ, ഖി, ഖീ, ഖു, ഖൂ, ഖെ, ഖേ, ഖൊ, ഖോ, ഖൌ, ഖം, ഖഃ'
        },
        {
          audioOffset: 50,
          audio: 'ml/ml-letter-1.mp3',
          words: 'ഗ, ഗാ, ഗി, ഗീ, ഗു, ഗൂ, ഗെ, ഗേ, ഗൊ, ഗോ, ഗൌ, ഗം, ഗഃ'
        },
        {
          audioOffset: 74,
          audio: 'ml/ml-letter-1.mp3',
          words: 'ഘ, ഘാ, ഘി, ഘീ, ഘു, ഘൂ, ഘെ, ഘേ, ഘൊ, ഘോ, ഘൌ, ഘം, ഘഃ'
        },
        {
          audioOffset: 98,
          audio: 'ml/ml-letter-1.mp3',
          words: 'ച, ചാ, ചി, ചീ, ചു, ചൂ, ചെ, ചേ, ചൊ, ചോ, ചൌ, ചം, ചഃ'
        },
        //2
        {
          audioOffset: 0,
          audio: 'ml/ml-letter-2.mp3',
          words: 'ഛ, ഛാ, ഛി, ഛീ, ഛു, ഛൂ, ഛെ, ഛേ, ഛൊ, ഛോ, ഛൌ, ഛം, ഛഃ'
        },
        {
          audioOffset: 26,
          audio: 'ml/ml-letter-2.mp3',
          words: 'ജ, ജാ, ജി, ജീ, ജു, ജൂ, ജെ, ജേ, ജൊ, ജോ, ജൌ, ജം, ജഃ'
        },
        {
          audioOffset: 50,
          audio: 'ml/ml-letter-2.mp3',
          words: 'ട, ടാ, ടി, ടീ, ടു, ടൂ, ടെ, ടേ, ടൊ, ടോ, ടൌ, ടം, ടഃ'
        },
        {
          audioOffset: 74,
          audio: 'ml/ml-letter-2.mp3',
          words: 'ഠ, ഠാ, ഠി, ഠീ, ഠു, ഠൂ, ഠെ, ഠേ, ഠൊ, ഠോ, ഠൌ, ഠം, ഠഃ'
        },
        {
          audioOffset: 98,
          audio: 'ml/ml-letter-2.mp3',
          words: 'ഡ, ഡാ, ഡി, ഡീ, ഡു, ഡൂ, ഡെ, ഡേ, ഡൊ, ഡോ, ഡൌ, ഡം, ഡഃ'
        },
        //3
        {
          audioOffset: 0,
          audio: 'ml/ml-letter-3.mp3',
          words: 'ഢ, ഢാ, ഢി, ഢീ, ഢു, ഢൂ, ഢെ, ഢേ, ഢൊ, ഢോ, ഢൌ, ഢം, ഢഃ'
        },
        {
          audioOffset: 26,
          audio: 'ml/ml-letter-3.mp3',
          words: 'ണ, ണാ, ണി, ണീ, ണു, ണൂ, ണെ, ണേ, ണൊ, ണോ, ണൌ, ണം, ണഃ'
        },
        {
          audioOffset: 50,
          audio: 'ml/ml-letter-3.mp3',
          words: 'ത, താ, തി, തീ, തു, തൂ, തെ, തേ, തൊ, തോ, തൌ, തം, തഃ'
        },
        {
          audioOffset: 74,
          audio: 'ml/ml-letter-3.mp3',
          words: 'ഥ, ഥാ, ഥി, ഥീ, ഥു, ഥൂ, ഥെ, ഥേ, ഥൊ, ഥോ, ഥൌ, ഥം, ഥഃ'
        },
        {
          audioOffset: 98,
          audio: 'ml/ml-letter-3.mp3',
          words: 'ദ, ദാ, ദി, ദീ, ദു, ദൂ, ദെ, ദേ, ദൊ, ദോ, ദൌ, ദം, ദഃ'
        },
        // 4
        {
          audioOffset: 0,
          audio: 'ml/ml-letter-4.mp3',
          words: 'ധ, ധാ, ധി, ധീ, ധു, ധൂ, ധെ, ധേ, ധൊ, ധോ, ധൌ, ധം, ധഃ'
        },
        {
          audioOffset: 26,
          audio: 'ml/ml-letter-4.mp3',
          words: 'ന, നാ, നി, നീ, നു, നൂ, നെ, നേ, നൊ, നോ, നൌ, നം, നഃ'
        },
        //5
        {
          audioOffset: 0,
          audio: 'ml/ml-letter-5.mp3',
          words: 'പ, പാ, പി, പീ, പു, പൂ, പെ, പേ, പൊ, പോ, പൌ, പം, പഃ'
        },
        {
          audioOffset: 26,
          audio: 'ml/ml-letter-5.mp3',
          words: 'ഫ, ഫാ, ഫി, ഫീ, ഫു, ഫൂ, ഫെ, ഫേ, ഫൊ, ഫോ, ഫൌ, ഫം, ഫഃ'
        },
        {
          audioOffset: 50,
          audio: 'ml/ml-letter-5.mp3',
          words: 'ബ, ബാ, ബി, ബീ, ബു, ബൂ, ബെ, ബേ, ബൊ, ബോ, ബൌ, ബം, ബഃ'
        },
        {
          audioOffset: 74,
          audio: 'ml/ml-letter-5.mp3',
          words: 'ഭ, ഭാ, ഭി, ഭീ, ഭു, ഭൂ, ഭെ, ഭേ, ഭൊ, ഭോ, ഭൌ, ഭം, ഭഃ'
        },
        {
          audioOffset: 98,
          audio: 'ml/ml-letter-5.mp3',
          words: 'മ, മാ, മി, മീ, മു, മൂ, മെ, മേ, മൊ, മോ, മൌ, മം, മഃ'
        },
        //6
        {
          audioOffset: 0,
          audio: 'ml/ml-letter-6.mp3',
          words: 'യ, യാ, യി, യീ, യു, യൂ, യെ, യേ, യൊ, യോ, യൌ, യം, യഃ'
        },
        {
          audioOffset: 26,
          audio: 'ml/ml-letter-6.mp3',
          words: 'ര, രാ, രി, രീ, രു, രൂ, രെ, രേ, രൊ, രോ, രൌ, രം, രഃ'
        },
        {
          audioOffset: 50,
          audio: 'ml/ml-letter-6.mp3',
          words: 'ല, ലാ, ലി, ലീ, ലു, ലൂ, ലെ, ലേ, ലൊ, ലോ, ലൌ, ലം, ലഃ'
        },
        {
          audioOffset: 74,
          audio: 'ml/ml-letter-6.mp3',
          words: 'വ, വാ, വി, വീ, വു, വൂ, വെ, വേ, വൊ, വോ, വൌ, വം, വഃ'
        },
        {
          audioOffset: 98,
          audio: 'ml/ml-letter-6.mp3',
          words: 'ശ, ശാ, ശി, ശീ, ശു, ശൂ, ശെ, ശേ, ശൊ, ശോ, ശൌ, ശം, ശഃ'
        },
        //7
        {
          audioOffset: 0,
          audio: 'ml/ml-letter-7.mp3',
          words: 'സ, സാ, സി, സീ, സു, സൂ, സെ, സേ, സൊ, സോ, സൌ, സം, സഃ'
        },
        {
          audioOffset: 26,
          audio: 'ml/ml-letter-7.mp3',
          words: 'ഹ, ഹാ, ഹി, ഹീ, ഹു, ഹൂ, ഹെ, ഹേ, ഹൊ, ഹോ, ഹൌ, ഹം, ഹഃ'
        },
        {
          audioOffset: 50,
          audio: 'ml/ml-letter-7.mp3',
          words: 'ള, ളാ, ളി, ളീ, ളു, ളൂ, ളെ, ളേ, ളൊ, ളോ, ളൌ, ളം, ളഃ'
        },
        {
          audioOffset: 74,
          audio: 'ml/ml-letter-7.mp3',
          words: 'ഴ, ഴാ, ഴി, ഴീ, ഴു, ഴൂ, ഴെ, ഴേ, ഴൊ, ഴോ, ഴൌ, ഴം, ഴഃ'
        },
        {
          audioOffset: 98,
          audio: 'ml/ml-letter-7.mp3',
          words: 'റ, റാ, റി, റീ, റു, റൂ, റെ, റേ, റൊ, റോ, റൌ, റം, റഃ '
        }
      ]
    },
    {
      type: 'completeWord',
      label: 'Complete the word',
      id: 'complete-word',
      data: {
        images: 'custom',
        text: `car| കാ, ർ | _ , ർ | കാ, ക, ഫ, മ
  peacock| മ,യി,ൽ | _,യി,ൽ | മ, കാ, ക, ഫ
  onion|ഉ,ള്ളി |_,ള്ളി | ഉ, മ, ഒ, ച
  camel|ഒ,ട്ട,കം |_,ട്ട,കം | ഒ, ഉ, മ, ച
  jackfruit|ച,ക്ക |_,ക്ക | ച, ഉ, മ, ഒ
  crab|ഞ,ണ്ട് |_,ണ്ട് | ഞ, ഉ, മ, ഒ
  bell|മ,ണി |_,ണി | മ, ഉ, ഒ, ച
  pen|പേ,ന |_,ന | പേ, ഉ, ഫ, ക
  fruits|ഫ,ലം |_,ലം | ഫ, പേ, ഉ, ക
  tiger|ക,ടു,വ |_,ടു,വ | ക, പേ, ഉ, ഫ`
      }
    },
    {
      type: 'match',
      label: 'Match Animals',
      data: {
        title: 'Match Animals with their first letter.',
        text: 'സിം, lion \nആ, elephant \nകു, monkey \nക, bear \nകാ, rhino \nമു, crocodile',
        rightImgType: 'fruits',
        big: true
      },
      id: 'match-animals'
    },
    {
      type: 'match',
      label: 'Match Flowers',
      data: {
        title: 'Match Flowers with their first letter.',
        text: 'റോ, rose \nതാ, lotus \nചെ,hibiscus \nസൂ, sunflower \nജ, marigold \n',
        rightImgType: 'fruits',
        big: true
      },
      id: 'match-flowers'
    }
  ]
};
